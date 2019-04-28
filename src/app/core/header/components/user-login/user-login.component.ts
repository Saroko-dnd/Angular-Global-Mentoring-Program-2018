import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthorizationService } from '../../../services';
import { IUserDataState } from 'src/app/core/header/components/user-login/store/user-data.state';
import {
  GetLoggedInUserData,
  Logout
} from 'src/app/core/header/components/user-login/store/user-data.actions';

@Component({
  selector: 'learn-portal-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  constructor(
    private store: Store<{ core: IUserDataState }>,
    private authorization: AuthorizationService,
    private location: Location,
    private router: Router
  ) {}

  userLogin: Observable<string>;
  isVisible: Observable<boolean>;

  login() {
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  ngOnInit() {
    this.userLogin = this.store.pipe(
      select(state => {
        return state.core.user.login;
      })
    );

    this.isVisible = this.store.pipe(
      select(state => {
        return state.core.shouldBeVisibleForUser;
      })
    );

    this.store.dispatch(new GetLoggedInUserData());
  }
}
