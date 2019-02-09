import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot  } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthorizationService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedUsersGuard implements CanActivate {
  constructor(private authorizationService: AuthorizationService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authorizationService.isAuthenticated()) {
        return true;
      }

      this.router.navigateByUrl('/login');
      return false;

  }
}
