import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vehicle-page',
  templateUrl: './add-vehicle-page.component.html',
  styleUrls: ['./add-vehicle-page.component.scss']
})

// export class addVehiclePageComponent implements OnInit
export class addVehiclePageComponent {
  toastMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Your form submission logic goes here
    // Assuming the form submission is successful, set the toast message
    this.toastMessage = 'Vehicle Added Successfully!';
    // Reset the toast message after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      this.toastMessage = '';
    }, 6000);
  }

}
