import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { AuthorizationService, LoadingSpinnerService } from 'src/app/core/services';
import { LoginActions, Login, LoginFailed, LoginWasSuccessful } from 'src/app/login/store/login.actions';

@Injectable()
export class LoginEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType(LoginActions.Login),
    mergeMap((loginAction: Login) => {
      this.spinnerService.show();

      return this.authorizationService.login(loginAction.payload.username, loginAction.payload.password)
        .pipe(
          map(() => {
            this.router.navigateByUrl('/courses');

            console.log('logged in successfully');

            this.spinnerService.hide();

            return new LoginWasSuccessful();
          }),
          catchError(() => {
            this.spinnerService.hide();

            return of(new LoginFailed());
          })
        );
      }
    ));

  constructor(
    private actions$: Actions,
    private authorizationService: AuthorizationService,
    private router: Router,
    private spinnerService: LoadingSpinnerService
  ) {}
}
