import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-silo-product-page',
  templateUrl: './add-silo-product-page.component.html',
  styleUrls: ['./add-silo-product-page.component.scss']
})
export class addSiloProductPageComponent implements OnInit {
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