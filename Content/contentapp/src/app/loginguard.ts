import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginguardService } from './loginguard.service';
import { UserserviceService } from './userservice.service';
import Swal from 'sweetalert2';

@Injectable()
export class Loginguard implements CanActivate {
  constructor(
    private loginservice: UserserviceService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.loginservice.isLoggedIn == true) {
      console.log('loginGuard:request is process...');

      return true;
    } else {
      console.log('loginguard not processed...');
      Swal.fire({
        icon: 'success',
        title: 'Login First',
        showConfirmButton: false,
        timer: 3000,
      });
      return this.router.navigateByUrl('/loginview');
    }
  }
}
