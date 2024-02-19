import { Component, OnInit } from '@angular/core';

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
  }

  all_contracts : Contract[];
  all_silos : Silo[];
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
  selectedVechicle : Vehicle;


  constructor(private apiService: ApiDataService) { }

  ngOnInit(): void {
    this.loadContracts();
    this.loadProducts();
    this.loadVehicles();
    this.loadSiloData();

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
    this.selectedContractString = selectedId;

    this.all_silos = this.all_silos.filter(x=>x.productId === this.selectedProduct.id)
  }

  siloSelectionChanged(selectedId: any) {

    // Split the string at the colon
    const parts = selectedId.split(":");
    // Get the second part and convert it to a number
    const secondPart = parseInt(parts[1]); 
        // Handle the change event here

        this.selectedSilo = this.all_silos.find(x => x.id === secondPart);
  
       console.log('Selected silo:', this.selectedContract);
    
        this.siloLoad.siloId = secondPart;
        this.selectedSiloString = selectedId;
      }

onSubmit()
{

}
}
