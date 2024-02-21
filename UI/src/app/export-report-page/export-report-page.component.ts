import { Component, OnInit } from '@angular/core';

import { ApiDataService } from '../services/ApiDataService';

import { Silo, SiloLoad, Vehicle, Product, Customer, Contract, Settings, LoadType, ProductCategory } from "../interfaces/Entities";
import { ApiResponse } from "../interfaces/ViewModels";

@Component({
  selector: 'app-export-report-page',
  templateUrl: './export-report-page.component.html',
  styleUrls: ['./export-report-page.component.scss']
})
export class ExportReportPageComponent implements OnInit {

  error: string ="";
  customers : Customer[];
  selectedCustomer : Customer ={
    id :  0,
    customerName : "",
    created: new Date(),
    archived: false,
  }

  constructor(private apiService: ApiDataService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers()
  {
    //api get call
    this.apiService.get<ApiResponse>('api/customer')
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.customers = resp.items;
          console.log('get api/customer: ' + JSON.stringify(this.customers));
        }
        else{
          this.error = resp.message;
          console.log('get api/customer: ' + this.error);
        }
      })
  }


  onSubmit()
  {
    console.log('selectedCustomer.Id: ' + this.selectedCustomer.id);
this.error ="";
        //api get call
        this.apiService.get<ApiResponse>('api/exportreport/' + this.selectedCustomer.id)
        .subscribe(result => {
          var resp = result;
          if (resp.success)
          {
            //resp.file is a byt
            console.log('api/exportreport : ' + JSON.stringify(resp));
  
            var byteArray = this.base64ToArrayBuffer(resp.message);
            let blob: any = new Blob([byteArray], { type: 'application/vnd.ms-excel' });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = "WB_Export.xlsx";
            link.click();
  
            //this.openPdfInNewTab(blob);
          }
          else{
            this.error = resp.message;
            console.log('api/exportreport : ' + this.error);
          }
        })
  }

  openPdfInNewTab(blob: Blob) {
    // 3. Create a URL for the blob
    const url = window.URL.createObjectURL(blob);
  
    // 4. Open the URL in a new tab
    window.open(url, '_blank');
  
    // 5. Revoke the object URL once the tab is closed
    window.URL.revokeObjectURL(url);
  }

  base64ToArrayBuffer(base64:any):ArrayBuffer {
    var binary_string =  window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
}
