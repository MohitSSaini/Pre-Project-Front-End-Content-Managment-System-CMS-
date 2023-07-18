import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  userform: FormGroup;

  constructor(private userservice: UserserviceService, private router: Router) {
    //this keywork is refer to object and userform is varable name and its create a new form group 
    this.userform = new FormGroup({
      userId: new FormControl('', Validators.required),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      // username: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  get userId() {
    return this.userform.get('userId');
  }
  get emailId() {
    return this.userform.get('emailId');
  }

  get password() {
    return this.userform.get('password');

  }
  // get username() {
  //   return this.userform.get('username');
  // }



  onSubmit() {
    this.userservice.registeruser(this.userform.value).subscribe(
      (response) => {
        console.log(response);
        this.userform.reset();
        this.router.navigateByUrl('/loginview');
        Swal.fire({
          icon: 'success',
          title: 'Form submitted successfully!',
          showConfirmButton: false,
          timer: 2000,
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'User ID is already present.',
          timer: 3000,
        });
      }
    );
  }


  // onSubmit() {
  //   this.userservice.registeruser(this.userform.value).subscribe((response) => {
  //     console.log(response);

  //     this.userform.reset();
  //     this.router.navigateByUrl('/loginview');
  //   });
  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Form submitted successfully!',
  //     showConfirmButton: false,
  //     timer: 2000,
  //   });
  // }
}
