import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {
 constructor( private router: Router, private http: HttpService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.http.token !== '') {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}