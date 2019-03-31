import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  AuthorizationService,
  LoadingSpinnerService
} from '../../../core/services';

@Component({
  selector: 'learn-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
    private spinnerService: LoadingSpinnerService
  ) {}

  userUsernameInput: string;
  userPasswordInput: string;
  errorMessageIsVisible = false;

  login() {
    this.spinnerService.show();

    this.errorMessageIsVisible = false;

    this.authorizationService
      .login(this.userUsernameInput, this.userPasswordInput)
      .subscribe(
        () => {
          this.router.navigateByUrl('/courses');
          console.log('logged in successfully');
          this.spinnerService.hide();
        },
        () => {
          this.errorMessageIsVisible = true;
          this.spinnerService.hide();
        }
      );
  }

  ngOnInit() {}
}
