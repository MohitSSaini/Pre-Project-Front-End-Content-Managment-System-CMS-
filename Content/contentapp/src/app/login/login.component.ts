import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginguardService } from '../loginguard.service';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // after creates a constructor for the class and injects two dependencies: the UserserviceService and the Router.

  constructor(private userservice:UserserviceService , private routes:Router) { }

  ngOnInit(): void {
  }
  // here we creates a new FormGroup object with two fields: emailId and password.
  // The emailId field is required and must be a valid email address. The password field is also required.
  userfrom=new FormGroup({
    "emailId": new FormControl('',[Validators.required, Validators.email]),
    "password":new FormControl('',[Validators.required])
  });

  // and here we declare two variables that will be used to store the response
  // from the authentication service and the email address of the logged in user.
  resp:any;
  tokenemail:any;

  onSubmit(){
    //here this is the reference of object userservice
    this.userservice.authentication(this.userfrom.value).subscribe(
      response=>{
        console.log(response);
        this.resp= response;
        this.tokenemail=response;
        // console.log(this.resp.token);
        // console.log(this.tokenemail.mail);
        localStorage.setItem('jwt',this.resp.token);
        localStorage.setItem('mail',this.tokenemail.mail);
        this.userfrom.reset();
        this.routes.navigateByUrl("/contentview");
        Swal.fire({
          icon: 'success',
          title: 'Login successful!',
          text: '',
          timer: 3000,
          showConfirmButton: false
        });
      },
      (error) => {
        // alert('Invalid username or password');
        Swal.fire({
          icon: 'error',
          title: 'Invalid username or password',
          text: '',
          timer: 2000,
          showConfirmButton: false
        });
      }

    );
    if(this.userfrom.valid){
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Please fix the errors in the form.',
        text: '',
        timer: 3000,
        showConfirmButton: false
      });
    }
  }
}









// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { UserserviceService } from '../userservice.service';
// import { Router } from '@angular/router';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   userForm: FormGroup;

//   constructor(private userservice: UserserviceService, private router: Router) {
//     this.userForm = new FormGroup({
//       emailId: new FormControl('', [Validators.required, Validators.email]),
//       password: new FormControl('', [Validators.required])
//     });
//   }

//   ngOnInit(): void {
//   }

//   isFieldInvalid(fieldName: string, validationType: string = ''): boolean {
//     const field = this.userForm.get(fieldName);
//     if (field) {
//       return (field.invalid && (field.dirty || field.touched)) && (validationType ? field.errors?.[validationType] : true);
//     }
//     return false;
//   }

//   onSubmit(): void {
//     if (this.userForm.valid) {
//       this.userservice.authentication(this.userForm.value).subscribe(
//         response => {
//           console.log(response);
//           const resp: any = response;
//           localStorage.setItem('jwt', resp.token); // Assuming the token is returned in the response
//           localStorage.setItem('mail', resp.mail); // Assuming the email is returned in the response
//           this.userForm.reset();
//           this.router.navigateByUrl("/contentview");
//           Swal.fire({
//             icon: 'success',
//             title: 'Login successful!',
//             text: '',
//             timer: 3000,
//             showConfirmButton: false
//           });
//         },
//         error => {
//           Swal.fire({
//             icon: 'error',
//             title: 'Invalid username or password',
//             text: '',
//             timer: 2000,
//             showConfirmButton: false
//           });
//         }
//       );
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Please fix the errors in the form.',
//         text: '',
//         timer: 3000,
//         showConfirmButton: false
//       });
//     }
//   }
// }
