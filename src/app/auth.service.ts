import { Injectable } from '@angular/core';
import {User, UsersService} from './users.service';
import {rejects} from 'assert';
import {Router} from '@angular/router';

// tslint:disable-next-line:no-empty-interface

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false ;
  connectedUser: User ;
  constructor(private userService: UsersService, private router: Router) { }
  isAuthentificated(): any{
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
         resolve(this.loggedIn) ;
        }, 1000) ;
      }
    ) ;
    return promise ;
  }
  login(email: string= '', pwd: string= ''): any {
    this.connectedUser = this.userService.getUserByEmailAndPass(email, pwd);
    if (this.connectedUser) {
      this.loggedIn = true ;
      console.log(this.loggedIn);
    }else {
      this.loggedIn = false ;
    }
    /*this.loggedIn = this.connectedUser ? true : false;*/
  }
  logout(): any {
    this.loggedIn = false ;
    this.connectedUser = null;
    this.router.navigate(['/login']);
  }
}





//[routerLink]="'/home'"