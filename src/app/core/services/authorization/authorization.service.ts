import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IUser } from 'src/app/shared';

interface IResponceWithUserToken {
  token: string;
}

@Injectable()
export class AuthorizationService {
  /* We do not have api on json-server that can return full list of users.
     Because of that i am still using this collection for list of authors in
     course-edit-form component*/
  static users: IUser[] = [
    {
      id: 1,
      name: {
        first: 'James',
        last: 'Smith'
      },
      fakeToken: '',
      password: '',
      login: ''
    },
    {
      id: 2,
      name: {
        first: 'John',
        last: 'Davis'
      },
      fakeToken: '',
      password: '',
      login: ''
    },
    {
      id: 3,
      name: {
        first: 'Robert',
        last: 'Williams'
      },
      fakeToken: '',
      password: '',
      login: ''
    },
    {
      id: 4,
      name: {
        first: 'Michael',
        last: 'Jones'
      },
      fakeToken: '',
      password: '',
      login: ''
    },
    {
      id: 5,
      name: {
        first: 'William',
        last: 'Brown'
      },
      fakeToken: '',
      password: '',
      login: ''
    },
    {
      id: 6,
      name: {
        first: 'David',
        last: 'Miller'
      },
      fakeToken: '',
      password: '',
      login: ''
    },
    {
      id: 7,
      name: {
        first: 'Richard',
        last: 'Wilson'
      },
      fakeToken: '',
      password: '',
      login: ''
    },
    {
      id: 8,
      name: {
        first: 'Joseph',
        last: 'Taylor'
      },
      fakeToken: '',
      password: '',
      login: ''
    },
    {
      id: 9,
      name: {
        first: 'Thomas',
        last: 'Anderson'
      },
      fakeToken: '',
      password: '',
      login: ''
    },
    {
      id: 10,
      name: {
        first: 'Charles',
        last: 'Martinez'
      },
      fakeToken: '',
      password: '',
      login: ''
    }
  ];

  loginPerformed: EventEmitter<undefined>;
  loginFailed: EventEmitter<undefined>;

  login(username: string, password: string, successCallback: () => void): void {
    this.http
      .post<IResponceWithUserToken>(`${this.AUTH_API_PATH}`, {
        login: username,
        password
      })
      .subscribe(
        response => {
          localStorage.setItem('user-token', response.token);
          this.loginPerformed.emit();

          successCallback();
        },
        error => {
          this.loginFailed.emit();
        }
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

  getUsers(): IUser[] {
    return AuthorizationService.users;
  }

  getUserLogin(): string {
    return localStorage.getItem('user-login');
  }


  getUserInfo(): Observable<IUser> {
    return this.http.post<IUser>(`${this.USER_INFO_API_PATH}`, {}).pipe(
      map(user => {
        localStorage.setItem('user-login', user.login);

        return user;
      })
    );
  }

  constructor(
    @Inject('AUTH_API_PATH') private AUTH_API_PATH: String,
    @Inject('USER_INFO_API_PATH') private USER_INFO_API_PATH: String,
    private http: HttpClient
  ) {
    this.loginPerformed = new EventEmitter();
    this.loginFailed = new EventEmitter();
  }
}
