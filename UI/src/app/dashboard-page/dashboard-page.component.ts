import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})

// export class DashboardPageComponent implements OnInit
export class DashboardPageComponent {
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
