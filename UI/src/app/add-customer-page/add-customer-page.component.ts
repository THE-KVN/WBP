import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer-page',
  templateUrl: './add-customer-page.component.html',
  styleUrls: ['./add-customer-page.component.scss']
})
export class addCustomerPageComponent implements OnInit {
  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}