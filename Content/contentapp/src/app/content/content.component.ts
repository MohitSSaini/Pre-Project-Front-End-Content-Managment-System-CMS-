import { VariableBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentserviceService } from '../contentservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(private contentservice: ContentserviceService) {
    // this.getalldetails();
    this.getAllcontents();
  }

  ngOnInit(): void {}


  var: any = localStorage.getItem('mail');
  Data: any;
  contArray: any;

  
  getAllcontents() {
    this.contentservice.getcontentsbyemailid().subscribe((response) => {
      this.Data = response;
      this.contArray = this.Data.contentData;
      console.log(this.contArray);
      console.log(response);
    });
  }

  contentform1 = new FormGroup({
    cid: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    writer: new FormControl(''),
    topic: new FormControl(''),
  });

  enable: boolean = false;
  update(data: any) {
    this.enable = true;
    this.contentform1.setValue(data);
    console.log(this.contentform1.value);
  }

  savedata() {
    this.contentservice
      .update(this.contentform1.value)
      .subscribe((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Data Updated',
          text: 'The data has been successfully updated.',
        }).then(() => {
          this.getAllcontents();
          this.contentform1.reset();
          // window.location.reload();
        });
      });
  }

  deletecontent(cid: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, the content cannot be recovered!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contentservice.deletcontent(cid).subscribe((response) => {
          Swal.fire({
            icon: 'success',
            title: 'Content Deleted',
            text: 'The content has been successfully deleted.',
          });
          this.getAllcontents();
        });
      }
    });
  }

  // deletecontent(cid: any) {
  //   this.contentservice.deletcontent(cid).subscribe((response) => {
  //     alert('content deleted');
  //     this.getAllcontents();
  //   });
  // }
}
