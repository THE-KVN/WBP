import { Component } from '@angular/core';
import { ApiDataService } from '../services/ApiDataService';

import { Silo, SiloLoad, Vehicle, Product, Customer, Contract, Settings, LoadType, ProductCategory } from "../interfaces/Entities";
import { ApiResponse } from "../interfaces/ViewModels";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})

// export class DashboardPageComponent implements OnInit
export class DashboardPageComponent {
  showModal: boolean = false;

  isLoadingSilos: boolean = false;
  isLoadingCurrentLoads: boolean = false;
  isLoadingCurrentOffLoads: boolean = false;

  error: string | null = null;

  all_silos : Silo[];
  silos1: Silo[] = [];
  silos2: Silo[] = [];
  currentLoads : SiloLoad[];
  currentOffLoads : SiloLoad[];

  selectedSiloLoad : SiloLoad = {
    id: 0,
    loadTypeId: undefined, // Or a default LoadType value
    loadType: "",
    firstWeight: 0,
    secondWeight: 0,
    totalWeigth: 0,
    firstWeightDate: undefined,
    secondWeightDate: undefined,
    isFinalized: false,
    finalizedDate: undefined,
    siloId: undefined,
    silo: undefined,
    productId: undefined,
    product: undefined,
    contractId: undefined,
    contract: undefined,
    vehicleId: undefined,
    vehicle: undefined,
    created: new Date(), // Set a default creation date
    modified: undefined,
    archived: false,
    wayBillNumber: ""
  };;

showFinalize : boolean = true;
disableFinalize : boolean = false;
finnalizeStatus : string = "FINALIZE";
finalizeClass : string = "button-1";

showWayBill : boolean = false;


  constructor(private apiService: ApiDataService) { }

  ngOnInit(): void {
    this.loadSiloData();
    this.loadCurrentLoads();
    this.loadCurrentOffLoads();
  }

  finalizeLoadModal(s : SiloLoad) {
    this.selectedSiloLoad = s;
    console.log("selected silo load: " + JSON.stringify(this.selectedSiloLoad));
    this.showFinalize  = true;
    this.showWayBill  = false;
    this.disableFinalize = false;
    this.finnalizeStatus = "FINALIZE";
    this.finalizeClass = "button-1";
    this.showModal = true;
  }

  onFinalizeLaod()
  {
    console.log("FINALZING...");
    this.showFinalize  = true;
    this.showWayBill  = false;
    this.disableFinalize = true;
    this.finnalizeStatus = "FINALZING...";
    this.finalizeClass = "button-2";

    //api post call
    var postUrl = "";
if (this.selectedSiloLoad.loadTypeId === 0)
{
  postUrl = "api/finalizeload";
}
else
{
  postUrl = "api/finalizeoffload";
}

    this.apiService.post<ApiResponse>(postUrl,this.selectedSiloLoad)
    .subscribe(result => {
      var resp = result;
      if (resp.success)
      {
        this.selectedSiloLoad = resp.item;
        console.log('post api/finalizeload :' + JSON.stringify(this.selectedSiloLoad));

        this.loadCurrentLoads();

        this.showFinalize  = true;
        this.showWayBill  = true;
        this.disableFinalize = true;
        this.finnalizeStatus = "FINALZED";
        this.finalizeClass = "button-2";
      }
      else{
        this.error = resp.message;
        console.log('post api/finalizeload :' + this.error);
      }
    })
  }

  onViewWaybill()
  {
    //api get call
    this.apiService.get<ApiResponse>('api/generatewaybil/' + this.selectedSiloLoad.id)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          //resp.file is a byt
          console.log('api/generatewaybil : ' + JSON.stringify(resp));

          var byteArray = this.base64ToArrayBuffer(resp.message);
          let blob: any = new Blob([byteArray], { type: 'application/pdf' });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = this.selectedSiloLoad.wayBillNumber + ".pdf";
          link.click();

          //this.openPdfInNewTab(blob);
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
    console.log('wb url : ' + url);
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

  closeModal() {
    this.showModal = false;
  }

  loadSiloData()
  { 
    //api get call
    this.isLoadingSilos = true;
    this.apiService.get<ApiResponse>('api/loadsilodata')
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingSilos = false;
          this.all_silos = resp.items;

          for (const element of this.all_silos) {
            if (element.number <= 4)
            {
              this.silos1.push(element);
            }
            else
            {
              this.silos2.push(element);
            }
          }


          console.log('api/loadsilodata:' + JSON.stringify(this.all_silos));
        }
        else{
          this.isLoadingSilos = false;
          this.error = resp.message;
          console.log('api/loadsilodata:' + this.error);
        }
      })
  }

  loadCurrentLoads()
  { 
    //api get call
    this.isLoadingCurrentLoads = true;
    this.apiService.get<ApiResponse>('api/getcurrentloading')
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingCurrentLoads = false;
          this.currentLoads = resp.items;
          console.log('api/getcurrentloading: ' + JSON.stringify(this.currentLoads));
        }
        else{
          this.isLoadingCurrentLoads = false;
          this.error = resp.message;
          console.log('api/getcurrentloading: ' + this.error);
        }
      })
  }

  loadCurrentOffLoads()
  {
        //api get call
        this.isLoadingCurrentOffLoads = true;
        this.apiService.get<ApiResponse>('api/getcurrentoffloading')
          .subscribe(result => {
            var resp = result;
            if (resp.success)
            {
              this.isLoadingCurrentOffLoads = false;
              this.currentOffLoads = resp.items;
              console.log('api/getcurrentoffloading: ' + JSON.stringify(this.currentOffLoads));
            }
            else{
              this.isLoadingCurrentOffLoads = false;
              this.error = resp.message;
              console.log('api/getcurrentoffloading: ' + this.error);
            }
          })
  }

  toFixedTwoDecimals(number: number): string {
    return number.toFixed(2);
  }

}
