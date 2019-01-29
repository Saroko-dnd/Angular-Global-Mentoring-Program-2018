import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'learn-portal-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  constructor(private authorization: AuthorizationService, private location: Location) {}

  userLogin: string;

  isAuth(): boolean {
    return this.location.path() === '/login';
  }

  logout() {
    this.userLogin = '';
    this.authorization.logout();

    console.log('logout');
  }

  ngOnInit() {
    this.userLogin = this.authorization.getUserInfo();
  }
}
