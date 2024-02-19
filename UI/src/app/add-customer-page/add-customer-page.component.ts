import { Component, OnInit } from '@angular/core';

import { ApiDataService } from '../services/ApiDataService';
import { Silo, SiloLoad, Vehicle, Product, Customer, Contract, Settings, LoadType, ProductCategory } from "../interfaces/Entities";
import { ApiResponse } from "../interfaces/ViewModels";

@Component({
  selector: 'app-add-customer-page',
  templateUrl: './add-customer-page.component.html',
  styleUrls: ['./add-customer-page.component.scss']
})
export class addCustomerPageComponent implements OnInit {
  showModal: boolean = false;
  toastMessage: string = '';
  isLoadingCustomers : boolean = false;
  isLoadingAddCustomer : boolean = false;
  isLoadingEditDelete : boolean = false;
  error : string = "";

  customer : Customer = {
    id :  0,
    customerName : "",
    created: new Date(),
    archived: false,
  };
  customers : Customer[];
  selectedCustomer : Customer;



  constructor(private apiService: ApiDataService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers()
  {
    //api get call
    this.isLoadingCustomers = true;
    this.apiService.get<ApiResponse>('api/customer')
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingCustomers = false;
          this.customers = resp.items;
          console.log('get api/customer: ' + JSON.stringify(this.customers));
        }
        else{
          this.isLoadingCustomers = false;
          this.error = resp.message;
          console.log('get api/customer: ' + this.error);
        }
      })
  }

  onSubmitCustomer() {
    console.log('Customer data:', this.customer);
    //api post call
    this.isLoadingAddCustomer = true;
    this.apiService.post<ApiResponse>('api/customer',this.customer)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingAddCustomer = false;
          this.customer = resp.item;
          console.log('post api/customer :' + JSON.stringify(this.customer));

          this.customer = {
            id :  0,
            customerName : "",
            created: new Date(),
            archived: false,
          };

          this.loadCustomers();
        }
        else{
          this.isLoadingAddCustomer = false;
          this.error = resp.message;
          console.log('post api/customer :' + this.error);
        }
      })
  }

  openModalCustomer(c : Customer) {
    this.selectedCustomer = c;
    console.log("selected customer: " + JSON.stringify(this.selectedCustomer));
    this.showModal = true;
  }

  closeModalCustomer() {
    this.showModal = false;
  }

  onEditCustomer() {
    console.log('Selected Customer data:', this.selectedCustomer);

    //api post call
    this.isLoadingEditDelete = true;
    this.apiService.put<ApiResponse>('api/customer',this.selectedCustomer.id,this.selectedCustomer)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingEditDelete = false;
          this.selectedCustomer = resp.item;
          console.log('put api/customer :' + JSON.stringify(this.selectedCustomer));

          this.selectedCustomer = {
            id :  0,
            customerName : "",
            created: new Date(),
            archived: false,
          };
          this.closeModalCustomer();
          this.loadCustomers();
        }
        else{
          this.isLoadingEditDelete = false;
          this.error = resp.message;
          console.log('put api/customer :' + this.error);
          this.closeModalCustomer();
        }
      })


  }

  onDeleteCustomer() {
    console.log('Selected Customer data:', this.selectedCustomer);

    //api post call
    this.isLoadingEditDelete = true;
    this.apiService.delete<ApiResponse>('api/customer',this.selectedCustomer.id)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingEditDelete = false;
          this.selectedCustomer = resp.item;
          console.log('delete api/customer :' + JSON.stringify(this.selectedCustomer));

          this.selectedCustomer = {
            id :  0,
            customerName : "",
            created: new Date(),
            archived: false,
          };
          this.closeModalCustomer();
          this.loadCustomers();
        }
        else{
          this.isLoadingEditDelete = false;
          this.error = resp.message;
          console.log('delete api/customer :' + this.error);
          this.closeModalCustomer();
        }
      })


  }

}