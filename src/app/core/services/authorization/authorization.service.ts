import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  login(email: string, password: string): void {
    localStorage.setItem('user-login', 'Fake User');
    localStorage.setItem('user-token', 'fake token');
  }

  logout(): void {
    localStorage.removeItem('user-login');
    localStorage.removeItem('user-token');
  }

  IsAuthenticated(): boolean {
    return localStorage.getItem('user-login') !== null && localStorage.getItem('user-token') !== null;
  }

  constructor() { }
}
