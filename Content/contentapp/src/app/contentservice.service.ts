import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentserviceService {
  constructor(private httpClient: HttpClient) {}
  base_url = 'http://localhost:9999/content-management/c1';

  getAllcontents() {
    return this.httpClient.get(this.base_url + '/getcontent');
  }

  addcontents(obj: any) {
    let httpheader = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    let requestOptions = { headers: httpheader };
    return this.httpClient.post(
      this.base_url + '/addcontent/' + localStorage.getItem('mail'),
      obj,
      requestOptions
    );
  }
  delete(email: string) {
    let httpheader = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    let requestOptions = { headers: httpheader };
    return this.httpClient.delete(
      this.base_url + '/delete/' + email,
      requestOptions
    );
  }
  getcontentsbyemailid() {
    return this.httpClient.get(
      this.base_url + '/get-contentsby-email/' + localStorage.getItem('mail')
    );
  }
  deletcontent(cid: any) {
    return this.httpClient.delete(
      this.base_url +
        '/delete-content/' +
        localStorage.getItem('mail') +
        '/' +
        cid
    );
  }
  update(obj: any) {
    return this.httpClient.put(
      this.base_url + '/update/' + localStorage.getItem('mail'),
      obj
    );
  }
}
