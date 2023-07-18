import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { ContentserviceService } from '../contentservice.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-addcontent',
  templateUrl: './addcontent.component.html',
  styleUrls: ['./addcontent.component.css'],
})
export class AddcontentComponent implements OnInit {
  constructor(
    private contentservice: ContentserviceService,
    private router: Router
  ) {}

  
  ngOnInit(): void {}


  contentform = new FormGroup({
    cid: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    writer: new FormControl('', [Validators.required]),
    topic: new FormControl('', [Validators.required]),
  });

  res: any;

  addcontent() {
    console.log(this.contentform.value);
    this.contentservice
      .addcontents(this.contentform.value)
      .subscribe((response) => {
        this.res = response;
        console.log(this.res);

        Swal.fire({
          title: 'Success',
          text: 'Content added successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.contentform.reset();
          this.router.navigateByUrl('/contentview');
        });
      });
  }
}



  // addcontent() {
  //   console.log(this.contentform.value);
  //   this.contentservice
  //     .addcontents(this.contentform.value)
  //     .subscribe((response) => {
  //       this.res = response;
  //       console.log(this.res);
  //       alert('content added sucessfully');
  //       this.contentform.reset();
  //       this.router.navigateByUrl('/contentview');
  //     });
  // }
