import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { addContractPageComponent } from './add-contract-page/add-contract-page.component';
import { addCustomerPageComponent } from './add-customer-page/add-customer-page.component';
import { addSiloProductPageComponent } from './add-silo-product-page/add-silo-product-page.component';
import { addVehiclePageComponent } from './add-vehicle-page/add-vehicle-page.component';
import { adjustSiloLevelsPageComponent } from './adjust-silo-levels-page/adjust-silo-levels-page.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { offLoadProductPageComponent } from './off-load-product-page/off-load-product-page.component';
import { loadProductPageComponent } from './load-product-page/load-product-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    addContractPageComponent,
    addCustomerPageComponent,
    addSiloProductPageComponent,
    addVehiclePageComponent,
    adjustSiloLevelsPageComponent,
    BottomNavComponent,
    SidebarNavComponent,
    DashboardPageComponent,
    offLoadProductPageComponent,
    loadProductPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
