import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { addContractPageComponent } from './add-contract-page/add-contract-page.component';
import { addCustomerPageComponent } from './add-customer-page/add-customer-page.component';
import { addSiloProductPageComponent } from './add-silo-product-page/add-silo-product-page.component';
import { addVehiclePageComponent } from './add-vehicle-page/add-vehicle-page.component';
import { adjustSiloLevelsPageComponent } from './adjust-silo-levels-page/adjust-silo-levels-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { offLoadProductPageComponent } from './off-load-product-page/off-load-product-page.component';
import { loadProductPageComponent } from './load-product-page/load-product-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent }, // Define the dashboard route
  
  { path: 'addContract', component: addContractPageComponent },
  { path: 'addCustomer', component: addCustomerPageComponent },
  { path: 'addSiloProduct', component: addSiloProductPageComponent },
  { path: 'addVehicle', component: addVehiclePageComponent },
  { path: 'adjustSiloLevels', component: adjustSiloLevelsPageComponent },
  { path: 'loadProduct', component: loadProductPageComponent },
  { path: 'offLoadProduct', component: offLoadProductPageComponent },
  { path: 'profile', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
