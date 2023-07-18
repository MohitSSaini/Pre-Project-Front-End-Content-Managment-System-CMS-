import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor(private httpClient: HttpClient) {}

  base_url: string = 'http://localhost:8888/authentication-app/v1';
  base_url1: string = 'http://localhost:9999/content-management/c1';

  registeruser(userobj: any) {
    return this.httpClient.post(this.base_url1 + '/add-user1', userobj);
  }
  
  isLoggedIn: boolean = false;

  authentication(userobj: any) {
    this.isLoggedIn = true;

    return this.httpClient.post(this.base_url + '/authenticate', userobj);
  }
}
