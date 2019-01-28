import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'learn-portal-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private authorization: AuthorizationService) { }

  userLogin: string;

  ngOnInit() {
    this.userLogin = this.authorization.getUserInfo();
  }
}
