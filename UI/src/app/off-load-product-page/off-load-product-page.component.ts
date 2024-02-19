import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-off-load-product-page',
  templateUrl: './off-load-product-page.component.html',
  styleUrls: ['./off-load-product-page.component.scss']
})
export class offLoadProductPageComponent implements OnInit {
  toastMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Your form submission logic goes here
    // Assuming the form submission is successful, set the toast message
    this.toastMessage = 'Off Load Product Added Successfully!';
    // Reset the toast message after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      this.toastMessage = '';
    }, 6000);
  }

}
