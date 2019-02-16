import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from 'src/app/shared';

interface IResponceWithUserToken {
  token: string;
}

@Injectable()
export class AuthorizationService {
  static users: IUser[] = [
    {
      id: '1',
      firstName: 'James',
      lastName: 'Smith'
    },
    {
      id: '2',
      firstName: 'John',
      lastName: 'Davis'
    },
    {
      id: '3',
      firstName: 'Robert',
      lastName: 'Williams'
    },
    {
      id: '4',
      firstName: 'Michael',
      lastName: 'Jones'
    },
    {
      id: '5',
      firstName: 'William',
      lastName: 'Brown'
    },
    {
      id: '6',
      firstName: 'David',
      lastName: 'Miller'
    },
    {
      id: '7',
      firstName: 'Richard',
      lastName: 'Wilson'
    },
    {
      id: '8',
      firstName: 'Joseph',
      lastName: 'Taylor'
    },
    {
      id: '9',
      firstName: 'Thomas',
      lastName: 'Anderson'
    },
    {
      id: '10',
      firstName: 'Charles',
      lastName: 'Martinez'
    }
  ];

  loginPerformed: EventEmitter<string>;
  loginFailed: EventEmitter<undefined>;

  login(username: string, password: string, successCallback: () => void): void {
    this.http
      .post<IResponceWithUserToken>(`${this.AUTH_URL}`, {
        login: username,
        password
      })
      .subscribe(
        response => {
          localStorage.setItem('user-token', response.token);
          localStorage.setItem('user-login', username);
          this.loginPerformed.emit(username);

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
    return (
      localStorage.getItem('user-login') !== null &&
      localStorage.getItem('user-token') !== null
    );
  }

  getUsers(): IUser[] {
    return AuthorizationService.users;
  }

  getUserInfo(): string {
    return localStorage.getItem('user-login');
  }

  constructor(
    @Inject('AUTH_URL') private AUTH_URL: String,
    private http: HttpClient
  ) {
    this.loginPerformed = new EventEmitter();
    this.loginFailed = new EventEmitter();
  }
}
