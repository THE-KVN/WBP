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


  constructor(private apiService: ApiDataService) { }

  ngOnInit(): void {
    this.loadSiloData();
    this.loadCurrentLoads();
    this.loadCurrentOffLoads();
  }

  openModal() {
    this.showModal = true;
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

}
