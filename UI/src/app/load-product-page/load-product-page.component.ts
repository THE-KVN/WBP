import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-product-page',
  templateUrl: './load-product-page.component.html',
  styleUrls: ['./load-product-page.component.scss']
})
export class loadProductPageComponent implements OnInit {
  toastMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Your form submission logic goes here
    // Assuming the form submission is successful, set the toast message
    this.toastMessage = 'Load Product Added Successfully!';
    // Reset the toast message after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      this.toastMessage = '';
    }, 6000);
  }

}
