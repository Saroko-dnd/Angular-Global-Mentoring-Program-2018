import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'learn-portal-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  constructor(private authorization: AuthorizationService, private location: Location, private router: Router) {
    authorization.loginPerformed.subscribe(userLogin => {
        this.userLogin = userLogin;
        this.userIsAuthenticated = true;
      }
    );
  }

  userIsAuthenticated: boolean;
  userLogin: string;

  isAuth(): boolean {
    return this.location.path() === '/login';
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.userIsAuthenticated = false;
    this.userLogin = '';
    this.authorization.logout();

    console.log('logout');
  }

  ngOnInit() {
    this.userLogin = this.authorization.getUserInfo();
    this.userIsAuthenticated = this.authorization.isAuthenticated();
  }
}
