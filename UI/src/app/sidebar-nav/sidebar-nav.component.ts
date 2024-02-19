import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ApiDataService } from '../services/ApiDataService';
import { Silo, SiloLoad, Vehicle, Product, Customer, Contract, Settings, LoadType, ProductCategory } from "../interfaces/Entities";
import { ApiResponse } from "../interfaces/ViewModels";

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
  
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '*',
        opacity: 1,
      })),
      state('out', style({
        height: '0',
        opacity: 0,
      })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in')),
    ]),
  ],

})

// export class SidebarNavComponent implements OnInit
export class SidebarNavComponent {
  adminDropdownState: string = 'out';
  adminDropdownVisible: boolean = false;
  selectedTab: string = 'dashboard';
  pinEntered: boolean = false;
  pin: string = '';

error: string = "";

  constructor(private apiService: ApiDataService) { }

  ngOnInit(): void {
  }

  showDashboard() {
    this.selectedTab = 'dashboard';
  }

  showAddvehicle() {
    this.selectedTab = 'add-vehicle';
  }

  showLoadProduct() {
    this.selectedTab = 'load-product';
  }
  
  showOffLoadProduct() {
    this.selectedTab = 'off-load-product';
  }

  toggleAdmin() {
    this.selectedTab = 'admin';
    if (this.pinEntered) {
      this.adminDropdownState = this.adminDropdownState === 'out' ? 'in' : 'out';
    } else {
      this.adminDropdownVisible = !this.adminDropdownVisible;
    }
  }

  submitPin() {
    // Add your logic to check if the entered PIN is correct (e.g., compare with a predefined PIN)
    const correctPIN = 'wbrhg.1234'; // Change this to your desired PIN

    if (this.pin === correctPIN) {
      this.pinEntered = true;
      this.adminDropdownState = 'in';
    } else {
      // Add logic for incorrect PIN (e.g., show an error message)
      alert('Incorrect PIN. Please try again.');
      this.pin = ''; // Clear the PIN input
    }
  }

  showAddSiloProduct() {
    this.selectedTab = 'add-silo-product';
  }

  showAdjustSiloLevels() {
    this.selectedTab = 'adjust-silo-levels';
  }

  showAddCustomer() {
    this.selectedTab = 'add-customer';
  }

  showAddContract() {
    this.selectedTab = 'add-contract';
  }

  showExportReports() {
    this.selectedTab = 'export-reports';
  }

  showWaybilPrintDownload() {
    this.selectedTab = 'waybil-print-download';

    //api get call
    this.apiService.get<ApiResponse>('api/generatewaybil/' + 1)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          //resp.file is a byt
          console.log('api/generatewaybil : ' + JSON.stringify(resp));

          var byteArray = this.base64ToArrayBuffer(resp.message);
          let blob: any = new Blob([byteArray], { type: 'application/pdf' });
          //var link = document.createElement('a');
          //link.href = window.URL.createObjectURL(blob);
          //link.download = "fileName2";
          //link.click();

          this.openPdfInNewTab(blob);
        }
        else{
          this.error = resp.message;
          console.log('api/generatewaybil : ' + this.error);
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
