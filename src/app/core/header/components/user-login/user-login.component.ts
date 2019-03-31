import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../../services';

@Component({
  selector: 'learn-portal-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  constructor(
    private authorization: AuthorizationService,
    private location: Location,
    private router: Router
  ) {}

  userLogin: string;

  isAuth(): boolean {
    return this.location.path() === '/login';
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.userLogin = '';
    this.authorization.logout();

    console.log('logout');
  }

  ngOnInit() {
    this.authorization.loginPerformed.subscribe(() => {
      this.authorization.getUserInfo().subscribe();
    });

    this.authorization.userData.subscribe(user => {
      this.userLogin = user.login;
    });

    if (this.authorization.isAuthenticated()) {
      this.userLogin = this.authorization.getUserLogin();
    }
  }
}
