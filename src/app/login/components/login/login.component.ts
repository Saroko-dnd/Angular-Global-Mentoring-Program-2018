import { Component } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'learn-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authorizationService: AuthorizationService) {}

  userEmailInput: string;
  userPasswordInput: string;

  login() {
    this.authorizationService.login(this.userEmailInput, this.userPasswordInput);

    console.log('logged in successfully');
  }
}
