import { Action } from '@ngrx/store';
import { IUser } from '../../../../../shared';

export enum UserDataStoreActions {
  GetLoggedInUserData = '[user-login Component] Get user data',
  UpdateUserData = '[user-login Component] Update user data',
  UpdateComponentVisibility = '[user-login Component] Update component visibility',
  ResetUserData = '[user-login Component] Reset user data',
  Logout = '[user-login Component] Logout'
}

export class GetLoggedInUserData implements Action {
  readonly type = UserDataStoreActions.GetLoggedInUserData;

  constructor() {}
}

export class Logout implements Action {
  readonly type = UserDataStoreActions.Logout;

  constructor() {}
}

export class UpdateUserData implements Action {
  readonly type = UserDataStoreActions.UpdateUserData;

  constructor(public payload: { user: IUser }) {}
}

export class UpdateComponentVisibility implements Action {
  readonly type = UserDataStoreActions.UpdateComponentVisibility;

  constructor(public payload: { shoulBeVisible: boolean }) {}
}

export class ResetUserData implements Action {
  readonly type = UserDataStoreActions.ResetUserData;

  constructor() {}
}

export type UserDataStoreActionsUnion = GetLoggedInUserData | UpdateUserData | ResetUserData | UpdateComponentVisibility;
