import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  login(email: string, password: string) {
    localStorage.setItem('user-name', 'Fake User');
    localStorage.setItem('user-token', 'fake token');
  }

  constructor() { }
}
