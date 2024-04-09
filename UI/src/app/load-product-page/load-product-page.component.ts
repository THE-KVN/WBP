import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ApiDataService } from '../services/ApiDataService';
import { Silo, SiloLoad, Vehicle, Product, Customer, Contract, Settings, LoadType, ProductCategory } from "../interfaces/Entities";
import { ApiResponse } from "../interfaces/ViewModels";

@Component({
  selector: 'app-load-product-page',
  templateUrl: './load-product-page.component.html',
  styleUrls: ['./load-product-page.component.scss']
})
export class loadProductPageComponent implements OnInit {

error : string = "";
toastMessage : string = "";

selectedContractString : string = "";
selectedSiloString : string = "";
selectedVehicleString : string = "";

  siloLoad : SiloLoad ={
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
  }

  all_contracts : Contract[];
  all_silos : Silo[];
  all_silos_dd : Silo[];
  all_products : Product[];
  all_vehicles : Vehicle[];

  isPageLoaded : boolean = false;
  isContractSelected : boolean = false;
  selectedContract : Contract = {
    id: 0,
      contractNumber: "",
      maxTonnages: 0,
      created: new Date(),
      archived: false,
    customer: {
      id :  0,
      customerName : "",
      created: new Date(),
      archived: false,
    },
    product: {
      id :  0,
      productName : "",
      productCategory : ProductCategory.Silo,
      productGrading : "",
      created: new Date(),
      archived: false,
    }
  };
  selectedCustomer : Customer ={
    id :  0,
    customerName : "Please select contract number",
    created: new Date(),
    archived: false,
  };
  selectedSilo : Silo;
  selectedProduct : Product = {
    id :  0,
    productName : "Please select contract number",
    productCategory : ProductCategory.Silo,
    productGrading : "",
    created: new Date(),
    archived: false,
  };
  selectedVechicle : Vehicle = {
    id: 0, // Or set to null based on your needs
    registrationNumber: "",
    make: "",
    created: new Date(),
    archived: false,
  };

  finalizedLoads : SiloLoad[];


  constructor(private apiService: ApiDataService, private router: Router) { }

  ngOnInit(): void {
    this.loadContracts();
    this.loadProducts();
    this.loadVehicles();
    this.loadSiloData();
    this.loadSiloLoads();
    this.isPageLoaded = true;
  }

  loadContracts()
  {
    //api get call
    this.apiService.get<ApiResponse>('api/contract')
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.all_contracts = resp.items;
          console.log('get api/contract: ' + JSON.stringify(this.all_contracts));
        }
        else{
          this.error = resp.message;
          console.log('get api/contract: ' + this.error);
        }
      })
  }

  loadProducts()
  {
        //api get call
        this.apiService.get<ApiResponse>('api/Product')
          .subscribe(result => {
            var resp = result;
            if (resp.success)
            {
              this.all_products = resp.items;
              console.log('api/Product: ' + JSON.stringify(this.all_products));
            }
            else{
              this.error = resp.message;
              console.log('api/Product: ' + this.error);
            }
          })
  }

  loadVehicles()
  {
        //api get call
        this.apiService.get<ApiResponse>('api/Vehicle')
          .subscribe(result => {
            var resp = result;
            if (resp.success)
            {
              this.all_vehicles = resp.items;
              console.log('api/Vehicle: ' + JSON.stringify(this.all_vehicles));
            }
            else{
              this.error = resp.message;
              console.log('api/Vehicle: ' + this.error);
            }
          })
  }

  loadSiloData()
  { 
    //api get call
    this.apiService.get<ApiResponse>('api/loadsilodata')
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.all_silos = resp.items;
          console.log('api/loadsilodata:' + JSON.stringify(this.all_silos));
        }
        else{
          this.error = resp.message;
          console.log('api/loadsilodata:' + this.error);
        }
      })
  }

  contractSelectionChanged(selectedId: any) {

// Split the string at the colon
const parts = selectedId.split(":");

// Get the second part and convert it to a number
const secondPart = parseInt(parts[1]);



    // Handle the change event here

    this.selectedContract = this.all_contracts.find(x => x.id === secondPart);
    this.selectedCustomer = this.selectedContract.customer;
    this.selectedProduct = this.selectedContract.product;

    console.log('Selected contract:', this.selectedContract);

    this.siloLoad.contractId = secondPart;
    this.siloLoad.productId = this.selectedProduct.id;
    this.selectedContractString = selectedId;

    this.all_silos_dd = this.all_silos.filter(x=>x.productId === this.selectedProduct.id);
    if (this.all_silos_dd.length > 0) {
      // this.all_silos has values
      this.siloLoad.siloId = this.all_silos_dd[0].id;
  }
  }

  siloSelectionChanged(selectedId: any) {

    // Split the string at the colon
    const parts = selectedId.split(":");
    // Get the second part and convert it to a number
    const secondPart = parseInt(parts[1]); 
        // Handle the change event here

        this.selectedSilo = this.all_silos.find(x => x.id === secondPart);
  
       console.log('Selected silo:', this.selectedSilo);
    
        this.siloLoad.siloId = secondPart;
        this.selectedSiloString = selectedId;
      }


  vehicleSelectionChanged(selectedId: any) {

    // Split the string at the colon
    const parts = selectedId.split(":");
    // Get the second part and convert it to a number
    const secondPart = parseInt(parts[1]); 
        // Handle the change event here

        this.selectedVechicle = this.all_vehicles.find(x => x.id === secondPart);
  
       console.log('Selected vehicle:', this.selectedVechicle);
    
        this.siloLoad.vehicleId = secondPart;
        this.selectedVehicleString = selectedId;
      }

onSubmit()
{
  console.log('Silo load to submit: ', this.siloLoad);

      //api post call
      this.apiService.post<ApiResponse>('api/createload',this.siloLoad)
        .subscribe(result => {
          var resp = result;
          if (resp.success)
          {
            this.siloLoad = resp.item;
            console.log('post api/createload :' + JSON.stringify(this.siloLoad));
  
            this.siloLoad = {
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
            };
  
            this.loadSiloLoads();

            this.router.navigate(['/']);
          }
          else{
            this.error = resp.message;
            console.log('post api/createload :' + this.error);
          }
        })
}

loadSiloLoads()
{
    //api get call
    this.apiService.get<ApiResponse>('api/getfinalizedloading')
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.finalizedLoads = resp.items;
          console.log('api/getfinalizedloading: ' + JSON.stringify(this.finalizedLoads));
        }
        else{
          this.error = resp.message;
          console.log('api/getfinalizedloading: ' + this.error);
        }
      })
}

viewWaybill(siloLoad : SiloLoad)
{
    //api get call
    this.apiService.get<ApiResponse>('api/generatewaybil/' + siloLoad.id)
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
          link.download = siloLoad.wayBillNumber + ".pdf";
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



}
