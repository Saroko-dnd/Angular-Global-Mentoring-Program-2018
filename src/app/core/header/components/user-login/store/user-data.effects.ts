import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_REQUEST, RouterRequestAction } from '@ngrx/router-store';

import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
  AuthorizationService,
  LoadingSpinnerService
} from 'src/app/core/services';
import {
  GetLoggedInUserData,
  ResetUserData,
  UserDataStoreActions,
  UpdateUserData,
  Logout,
  UpdateComponentVisibility
} from 'src/app/core/header/components/user-login/store/user-data.actions';

@Injectable()
export class UserDataStoreEffects {
  @Effect()
  getLoggedInUserData$ = this.actions$.pipe(
    ofType(UserDataStoreActions.GetLoggedInUserData),
    mergeMap((getUserDataAction: GetLoggedInUserData) => {
      this.spinnerService.show();

      return this.authorizationService.getUserInfo().pipe(
        map(user => {
          this.spinnerService.hide();

          return new UpdateUserData({ user });
        }),
        catchError(() => {
          this.spinnerService.hide();

          return of(new ResetUserData());
        })
      );
    })
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(UserDataStoreActions.Logout),
    mergeMap((logoutAction: Logout) => {
      this.authorizationService.logout();

      console.log('logout');

      return of(new ResetUserData());
    })
  );

  @Effect()
  routerRequest$ = this.actions$.pipe(
    ofType(ROUTER_REQUEST),
    mergeMap((routerRequestAction: RouterRequestAction) => {
      if (routerRequestAction.payload.routerState.url === '/login') {
        return [
          new GetLoggedInUserData(),
          new UpdateComponentVisibility({ shoulBeVisible: true })
        ];
      }
      if (routerRequestAction.payload.event.url === '/login') {
        return of(new UpdateComponentVisibility({ shoulBeVisible: false }));
      }

      return of(new UpdateComponentVisibility({ shoulBeVisible: true }));
    })
  );

  constructor(
    private actions$: Actions,
    private authorizationService: AuthorizationService,
    private spinnerService: LoadingSpinnerService
  ) {}
}
