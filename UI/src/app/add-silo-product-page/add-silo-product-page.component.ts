import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-silo-product-page',
  templateUrl: './add-silo-product-page.component.html',
  styleUrls: ['./add-silo-product-page.component.scss']
})
export class addSiloProductPageComponent implements OnInit {
  showModal: boolean = false;
  toastMessage: string = '';
  toastMessageEdit: string = '';
  isLoading: boolean = true; // Initially, show the loader

  constructor() {
    // Simulate data loading
    setTimeout(() => {
      // Data loading completed
      this.isLoading = false;
    }, 4000); // Simulating 4 seconds of loading time
   }

  ngOnInit(): void {
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    // Your form submission logic goes here
    // Assuming the form submission is successful, set the toast message
    this.toastMessage = 'Silo Product Added Successfully!';
    // Reset the toast message after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      this.toastMessage = '';
    }, 6000);
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