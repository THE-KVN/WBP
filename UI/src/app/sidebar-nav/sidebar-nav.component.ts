import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
  
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '*',
        opacity: 1,
      })),
      state('out', style({
        height: '0',
        opacity: 0,
      })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in')),
    ]),
  ],

})

// export class SidebarNavComponent implements OnInit
export class SidebarNavComponent {
  adminDropdownState: string = 'out';
  adminDropdownVisible: boolean = false;
  selectedTab: string = 'dashboard';
  pinEntered: boolean = false;
  pin: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  showDashboard() {
    this.selectedTab = 'dashboard';
  }

  showAddvehicle() {
    this.selectedTab = 'add-vehicle';
  }

  showLoadProduct() {
    this.selectedTab = 'load-product';
  }
  
  showOffLoadProduct() {
    this.selectedTab = 'off-load-product';
  }

  toggleAdmin() {
    this.selectedTab = 'admin';
    if (this.pinEntered) {
      this.adminDropdownState = this.adminDropdownState === 'out' ? 'in' : 'out';
    } else {
      this.adminDropdownVisible = !this.adminDropdownVisible;
    }
  }

  submitPin() {
    // Add your logic to check if the entered PIN is correct (e.g., compare with a predefined PIN)
    const correctPIN = 'wbrhg01'; // Change this to your desired PIN

    if (this.pin === correctPIN) {
      this.pinEntered = true;
      this.adminDropdownState = 'in';
    } else {
      // Add logic for incorrect PIN (e.g., show an error message)
      alert('Incorrect PIN. Please try again.');
      this.pin = ''; // Clear the PIN input
    }
  }

  showAddSiloProduct() {
    this.selectedTab = 'add-silo-product';
  }

  showAdjustSiloLevels() {
    this.selectedTab = 'adjust-silo-levels';
  }

  showAddCustomer() {
    this.selectedTab = 'add-customer';
  }

  showAddContract() {
    this.selectedTab = 'add-contract';
  }

  showExportReports() {
    this.selectedTab = 'export-reports';
  }

  showWaybilPrintDownload() {
    this.selectedTab = 'waybil-print-download';
  }

}
