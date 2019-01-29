import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'learn-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authorizationService: AuthorizationService, private router: Router) {}

  userEmailInput: string;
  userPasswordInput: string;

  login() {
    this.authorizationService.login(this.userEmailInput, this.userPasswordInput);

    console.log('logged in successfully');

    this.router.navigateByUrl('/courses');
  }
}
