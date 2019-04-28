import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  AuthorizationService,
  LoadingSpinnerService
} from '../../../core/services';
import { ILoginState } from 'src/app/login/store/login.state';
import { ResetLoginState, Login } from 'src/app/login/store/login.actions';

@Component({
  selector: 'learn-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store<{login: ILoginState}>,
    private authorizationService: AuthorizationService,
    private router: Router,
    private spinnerService: LoadingSpinnerService
  ) {
  }

  userUsernameInput: string;
  userPasswordInput: string;
  loginFailed$: Observable<boolean>;

  login() {
    this.store.dispatch(new ResetLoginState());

    this.store.dispatch(new Login({username: this.userUsernameInput, password: this.userPasswordInput}));
  }

  ngOnInit() {
    this.loginFailed$ = this.store.pipe(select(state => {
      return state.login.loginFailed;
    }));
  }
}
