import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';


@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
