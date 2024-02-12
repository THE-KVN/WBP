import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adjust-silo-levels-page',
  templateUrl: './adjust-silo-levels-page.component.html',
  styleUrls: ['./adjust-silo-levels-page.component.scss']
})
export class adjustSiloLevelsPageComponent implements OnInit {
  showModal: boolean = false;
  toastMessageEdit: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmitEdit() {
    // Your form submission logic goes here
    // Assuming the form submission is successful, set the toast message
    this.toastMessageEdit = 'Contract Edited Successfully!';
    // Reset the toast message after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      this.toastMessageEdit = '';
    }, 6000);
  }

}