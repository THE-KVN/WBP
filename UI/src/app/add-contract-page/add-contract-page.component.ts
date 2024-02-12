import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contract-page',
  templateUrl: './add-contract-page.component.html',
  styleUrls: ['./add-contract-page.component.scss']
})
export class addContractPageComponent implements OnInit {
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