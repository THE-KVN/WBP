import { Component, OnInit } from '@angular/core';

import { ApiDataService } from '../services/ApiDataService';
import { Silo, SiloLoad, Vehicle, Product, Customer, Contract, Settings, LoadType, ProductCategory } from "../interfaces/Entities";
import { ApiResponse } from "../interfaces/ViewModels";

@Component({
  selector: 'app-add-contract-page',
  templateUrl: './add-contract-page.component.html',
  styleUrls: ['./add-contract-page.component.scss']
})
export class addContractPageComponent implements OnInit {
  showModal: boolean = false;

  isLoadingContracts : boolean = false;
  isLoadingAddContract : boolean = false;
  isLoadingEditDelete : boolean = false;
  error : string = "";

  contract : Contract = {
    id: 0,
    contractNumber: "",
    maxTonnages: 0,
    created: new Date(),
    archived: false,
  };
  contracts : Contract[];
  selectedContract : Contract = {
    id: 0,
    contractNumber: "",
    maxTonnages: 0,
    created: new Date(),
    archived: false,
  };;

  customers : Customer[];
  products : Product[];

  constructor(private apiService: ApiDataService) { }

  ngOnInit(): void {
    this.loadContracts();
    this.loadCustomers();
    this.loadProducts();
  }

  loadContracts()
  {
    //api get call
    this.isLoadingContracts = true;
    this.apiService.get<ApiResponse>('api/contract')
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingContracts = false;
          this.contracts = resp.items;
          console.log('get api/contract: ' + JSON.stringify(this.contracts));
        }
        else{
          this.isLoadingContracts = false;
          this.error = resp.message;
          console.log('get api/contract: ' + this.error);
        }
      })
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

  loadProducts()
  {
        //api get call
        this.apiService.get<ApiResponse>('api/Product')
          .subscribe(result => {
            var resp = result;
            if (resp.success)
            {
              this.products = resp.items;
              console.log('api/Product: ' + JSON.stringify(this.products));
            }
            else{
              this.error = resp.message;
              console.log('api/Product: ' + this.error);
            }
          })
  }

  onSubmitContract() {
    console.log('Contract data:', this.contract);
    //api post call
    this.isLoadingAddContract = true;
    this.apiService.post<ApiResponse>('api/contract',this.contract)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingAddContract = false;
          this.contract = resp.item;
          console.log('post api/contract :' + JSON.stringify(this.contract));

          this.contract = {
            id: 0,
            contractNumber: "",
            maxTonnages: 0,
            created: new Date(),
            archived: false,
          };

          this.loadContracts();
        }
        else{
          this.isLoadingAddContract = false;
          this.error = resp.message;
          console.log('post api/contract :' + this.error);
        }
      })
  }

  openModalContract(c : Contract) {
    this.selectedContract = c;
    console.log("selected contract: " + JSON.stringify(this.selectedContract));
    this.showModal = true;
  }

  closeModalContract() {
    this.selectedContract = {
      id: 0,
      contractNumber: "",
      maxTonnages: 0,
      created: new Date(),
      archived: false,
    };
    this.showModal = false;
  }

  onEditContract() {
    console.log('Selected Contract data:', this.selectedContract);

    //api post call
    this.isLoadingEditDelete = true;
    this.apiService.put<ApiResponse>('api/contract',this.selectedContract.id,this.selectedContract)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingEditDelete = false;
          this.selectedContract = resp.item;
          console.log('put api/contract :' + JSON.stringify(this.selectedContract));

          this.selectedContract = {
            id: 0,
            contractNumber: "",
            maxTonnages: 0,
            created: new Date(),
            archived: false,
          };
          this.closeModalContract();
          this.loadContracts();
        }
        else{
          this.isLoadingEditDelete = false;
          this.error = resp.message;
          console.log('put api/contract :' + this.error);
          this.closeModalContract();
        }
      })


  }

  onDeleteContract() {
    console.log('Selected Contract data:', this.selectedContract);

    //api post call
    this.isLoadingEditDelete = true;
    this.apiService.delete<ApiResponse>('api/contract',this.selectedContract.id)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingEditDelete = false;
          this.selectedContract = resp.item;
          console.log('delete api/contract :' + JSON.stringify(this.selectedContract));

          this.selectedContract = {
            id: 0,
            contractNumber: "",
            maxTonnages: 0,
            created: new Date(),
            archived: false,
          };
          this.closeModalContract();
          this.loadContracts();
        }
        else{
          this.isLoadingEditDelete = false;
          this.error = resp.message;
          console.log('delete api/contract :' + this.error);
          this.closeModalContract();
        }
      })


  }

}