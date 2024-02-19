import { Component, OnInit } from '@angular/core';

import { ApiDataService } from '../services/ApiDataService';
import { Silo, SiloLoad, Vehicle, Product, Customer, Contract, Settings, LoadType, ProductCategory } from "../interfaces/Entities";
import { ApiResponse } from "../interfaces/ViewModels";

@Component({
  selector: 'app-add-vehicle-page',
  templateUrl: './add-vehicle-page.component.html',
  styleUrls: ['./add-vehicle-page.component.scss']
})

// export class addVehiclePageComponent implements OnInit
export class addVehiclePageComponent {

  isLoading : boolean = false;
  isLoadingVehicles : boolean = false;

  error : string = "";

  vehicle: Vehicle = {
    id: 0, // Or set to null based on your needs
    registrationNumber: "",
    make: "",
    created: new Date(),
    archived: false,
  };

  vehicles : Vehicle[];

  constructor(private apiService: ApiDataService) { }





  ngOnInit(): void {
    this.loadVehicles();
  }

  onSubmit() {
    console.log('Vehicle data:', this.vehicle);

    //api post call
    this.isLoading = true;
    this.apiService.post<ApiResponse>('api/vehicle',this.vehicle)
      .subscribe(result => {
        var resp = result;
        if (resp.success)
        {
          this.isLoading = false;
          this.vehicle = resp.item;
          console.log('api/vehicle :' + JSON.stringify(this.vehicle));

          this.vehicle = {
            id: 0, // Or set to null based on your needs
            registrationNumber: "",
            make: "",
            created: new Date(),
            archived: false,
          };

          this.loadVehicles();
        }
        else{
          this.isLoading = false;
          this.error = resp.message;
          console.log('api/vehicle :' + this.error);
        }
      })


  }

  loadVehicles()
  {
        //api get call
        this.isLoadingVehicles = true;
        this.apiService.get<ApiResponse>('api/Vehicle')
          .subscribe(result => {
            var resp = result;
            if (resp.success)
            {
              this.isLoadingVehicles = false;
              this.vehicles = resp.items;
              console.log('api/Vehicle: ' + JSON.stringify(this.vehicles));
            }
            else{
              this.isLoadingVehicles = false;
              this.error = resp.message;
              console.log('api/Vehicle: ' + this.error);
            }
          })
  }

}
