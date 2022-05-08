import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

 constructor(public checkIfAuth: AuthService,public router: Router) {}
         canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

 if (this.checkIfAuth.checkIfLogin() != false) {
      return true;
 }
 else {
    this.router.navigate(['/login'], {
    queryParams: {
    return: state.url
            }
      });
 return false;
    }
  }
}
