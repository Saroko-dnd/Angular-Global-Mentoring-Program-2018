import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { IUser } from 'src/app/shared';

interface IResponceWithUserToken {
  token: string;
}

@Injectable()
export class AuthorizationService {
  loginPerformed: EventEmitter<undefined>;
  loginFailed: EventEmitter<undefined>;
  userData: BehaviorSubject<IUser>;

  login(username: string, password: string): Observable<void> {
    return this.http
      .post<IResponceWithUserToken>(`${this.AUTH_API_PATH}`, {
        login: username,
        password
      })
      .pipe(
        map(response => {
          localStorage.setItem('user-token', response.token);
          this.loginPerformed.emit();
        })
      );
  }

  logout(): void {
    localStorage.removeItem('user-login');
    localStorage.removeItem('user-token');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user-token') !== null;
  }

  getAuthorizationToken(): string {
    return localStorage.getItem('user-token');
  }

  getUserLogin(): string {
    return localStorage.getItem('user-login');
  }

  getUserInfo(): Observable<IUser> {
    return this.http.post<IUser>(`${this.USER_INFO_API_PATH}`, {}).pipe(
      map(user => {
        this.userData.next(user);
        localStorage.setItem('user-login', user.login);

        return user;
      })
    );
  }

  constructor(
    @Inject('AUTH_API_PATH') private AUTH_API_PATH: String,
    @Inject('DEFAULT_USER_INFO') private DEFAULT_USER_INFO: IUser,
    @Inject('USER_INFO_API_PATH') private USER_INFO_API_PATH: String,
    private http: HttpClient
  ) {
    this.loginPerformed = new EventEmitter();
    this.loginFailed = new EventEmitter();

    this.userData = new BehaviorSubject<IUser>(this.DEFAULT_USER_INFO);
  }
}
