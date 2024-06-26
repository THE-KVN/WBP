import { Component, OnInit } from '@angular/core';

import { ApiDataService } from '../services/ApiDataService';
import { Silo, SiloLoad, Vehicle, Product, Customer, Contract, Settings, LoadType, ProductCategory } from "../interfaces/Entities";
import { ApiResponse } from "../interfaces/ViewModels";


@Component({
  selector: 'app-adjust-silo-levels-page',
  templateUrl: './adjust-silo-levels-page.component.html',
  styleUrls: ['./adjust-silo-levels-page.component.scss']
})
export class adjustSiloLevelsPageComponent implements OnInit {
  showModal: boolean = false;
  toastMessageEdit : string = "";

  isLoadingSilos : boolean = false;
  isLoadingEdit : boolean = false;

  error : string = "";

  silos : Silo[];
  selectedSilo : Silo = {
    id: 0, // Or set to null based on your needs
    number: 0,
    friendlyName: "",
    currentMeasurement: 0,
    capacity: 0,
    spaceAvailable: 0,
    precentageFull: 0,
    productId: 0, // Optional property
    product: undefined, // Optional property
    created: new Date(),
    archived: false,
  };

  products : Product[];

  constructor(private apiService: ApiDataService) { }

  ngOnInit(): void {
    this.loadSilos();
    this.loadProducts();
  }

  loadSilos()
  {
    //api get call
    this.isLoadingSilos = true;
    this.apiService.get<ApiResponse>('api/loadsilodata')
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingSilos = false;
          this.silos = resp.items;
          console.log('api/loadsilodata:' + JSON.stringify(this.silos));
        }
        else{
          this.isLoadingSilos = false;
          this.error = resp.message;
          console.log('api/loadsilodata:' + this.error);
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

  EditSiloModal(s : Silo) {
    this.selectedSilo = s;

    console.log("selected silo: " + JSON.stringify(this.selectedSilo));

    this.showModal = true;
  }

  onEditSilo() {
    console.log('Selected Silo data:', this.selectedSilo);

    //api post call
    this.isLoadingEdit = true;
    this.apiService.put<ApiResponse>('api/silo',this.selectedSilo.id,this.selectedSilo)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoadingEdit = false;
          this.selectedSilo = resp.item;
          console.log('put api/silo :' + JSON.stringify(this.selectedSilo));

          this.selectedSilo = {
            id: 0, // Or set to null based on your needs
            number: 0,
            friendlyName: "",
            currentMeasurement: 0,
            capacity: 0,
            spaceAvailable: 0,
            precentageFull: 0,
            productId: undefined, // Optional property
            product: undefined, // Optional property
            created: new Date(),
            archived: false,
          };
          this.closeModal();
          this.toastMessageEdit = 'Contract Edited Successfully!';
          this.loadSilos();
        }
        else{
          this.isLoadingEdit = false;
          this.error = resp.message;
          console.log('put api/silo :' + this.error);
          this.closeModal();
        }
      })


  }


  closeModal() {
    this.showModal = false;
  }



}