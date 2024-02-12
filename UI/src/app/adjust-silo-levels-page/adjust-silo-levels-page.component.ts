import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adjust-silo-levels-page',
  templateUrl: './adjust-silo-levels-page.component.html',
  styleUrls: ['./adjust-silo-levels-page.component.scss']
})
export class adjustSiloLevelsPageComponent implements OnInit {
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