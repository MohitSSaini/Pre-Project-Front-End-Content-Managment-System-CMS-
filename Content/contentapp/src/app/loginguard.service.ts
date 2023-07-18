import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginguardService {
  constructor(private router: Router) {}

  isLoggedIn: boolean = false;
  login(userData: any) {
    if (userData != null) {
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
      alert('LoggedIn successfully!!');
    } else {
      console.log('please enter valid credentials!');
    }
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }
}








// login(userData: any) {
//   if (userData != null) {
//     this.isLoggedIn = true;
//     Swal.fire('Logged In!', 'LoggedIn successfully!!', 'success');
//   } else {
//     console.log('please enter valid credentials!');
//     Swal.fire('Invalid Credentials!', 'Please enter valid credentials!', 'error');
//   }
// }

// isAuthenticated() {
//   return this.isLoggedIn;
// }
