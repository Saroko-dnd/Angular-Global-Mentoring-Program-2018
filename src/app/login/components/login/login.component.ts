import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../../core/services';

@Component({
  selector: 'learn-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  userUsernameInput: string;
  userPasswordInput: string;
  errorMessageIsVisible = false;

  login() {
    this.errorMessageIsVisible = false;

    this.authorizationService.login(
      this.userUsernameInput,
      this.userPasswordInput,
      () => {
        this.router.navigateByUrl('/courses');
        console.log('logged in successfully');
      }
    );
  }

  ngOnInit() {
    this.authorizationService.loginFailed.subscribe(() => {
      this.errorMessageIsVisible = true;
    });
  }
}
