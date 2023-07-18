import { Component, OnInit } from '@angular/core';
import { ContentserviceService } from '../contentservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  constructor(private contentservice: ContentserviceService) {
    this.getalldetails();
  }

  ngOnInit(): void {}

  contentdata: any;
  getalldetails() {
    this.contentservice.getAllcontents().subscribe((response) => {
      this.contentdata = response;
      console.log(this.contentdata);
    });
  }
  delete(email: string) {
    this.contentservice.delete(email).subscribe((response) => {
      this.getalldetails();
    });
    Swal.fire({
      icon: 'success',
      title: 'Deleted UserDetails successfully!',
      showConfirmButton: false,
      timer: 3000,
    });
  }
}
