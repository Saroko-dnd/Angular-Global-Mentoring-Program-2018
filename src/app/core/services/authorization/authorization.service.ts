import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthorizationService {
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

  getUserInfo(): string {
    return localStorage.getItem('user-login');
  }

  constructor() {
    this.loginPerformed = new EventEmitter();
  }
}
