import { Injectable } from '@angular/core';
import { Router } from '@angular/router';





@Injectable()
export class AuthService {
  username =  localStorage.getItem('username') || 'Guest';
  is_login =(this.username) === 'Guest' ? false : true;

  constructor(
    public  router: Router,
  ) {}


  

   checkIfLogin() {

       return this.is_login
   }


   tell_username() {

      return this.username
   }

   logout() {

    localStorage.clear();
    window.location.reload()
  }
}
