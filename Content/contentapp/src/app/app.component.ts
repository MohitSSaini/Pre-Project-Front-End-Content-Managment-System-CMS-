import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from './userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'contentapp';

  // Component code
  isLoggedIn: boolean = false; // Set it to true or false based on the user's login status

  constructor(
    private router: Router,
    private userservice: UserserviceService,
    private loginservice: UserserviceService
  ) {}

  logout() {
    // Show SweetAlert confirmation message
    Swal.fire({
      title: 'Logout Confirmation',
      text: 'Are you sure you want to log out?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!',
    })
    // in this user's response to the confirmation popup. When the user clicks a button
    //  (confirm or cancel), the then function will be executed, and the result of the user's choice will be available in the result variable.

    // here we Checks if the user clicked the confirm button (clicked "Yes, logout!").
    // If the condition is true, the following code block will be executed.

    .then((result) => {
      if (result.isConfirmed) {
        // Clear localStorage
        localStorage.clear();

        console.log('logout');

        // Perform the logout process, setting isLoggedIn to false
        this.userservice.isLoggedIn = false;

        // Redirect to the loginview page
        this.router.navigateByUrl('/loginview');
        Swal.fire({
          title: 'Logged Out',
          text: 'You have been logged out successfully.',
          icon: 'success',
        });
      }
    });

  }

  loginPart() {
    if (!this.loginservice.isLoggedIn) {
      console.log('you cant See userDasboard');
      return false;
    } else {
      console.log('you can not access');
      return true;
    }
  }
}




  // logout() {
  //   localStorage.clear();
  //   console.log('logout');
  //   this.userservice.isLoggedIn = false;//this is refering the object
  //   this.router.navigateByUrl('/loginview');
  //     Swal.fire({
  //     icon: 'success',
  //     title: 'LogOut successfully!',
  //     showConfirmButton: false,
  //     timer: 3000,
  //   });
  // }
