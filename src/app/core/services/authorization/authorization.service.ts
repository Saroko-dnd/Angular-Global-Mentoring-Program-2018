import { Injectable, EventEmitter } from '@angular/core';

import { IUser } from 'src/app/shared';

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

  login(email: string, password: string): void {
    localStorage.setItem('user-login', email);
    localStorage.setItem('user-token', 'fake token');

    this.loginPerformed.emit(email);
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

  constructor() {
    this.loginPerformed = new EventEmitter();
  }
}
