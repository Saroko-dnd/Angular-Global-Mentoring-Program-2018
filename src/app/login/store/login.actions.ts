import { Action } from '@ngrx/store';

export enum LoginActions {
  Login = '[Login Page] Login',
  LoginFailed = '[Login Page] Login failed',
  ResetLoginState = '[Login Page] Reset login state',
  LoginWasSuccessful = '[Login Page] Login was successful'
}

export class Login implements Action {
  readonly type = LoginActions.Login;

  constructor(public payload: { username: string; password: string }) {}
}

export class LoginFailed implements Action {
  readonly type = LoginActions.LoginFailed;

  constructor() {}
}

export class LoginWasSuccessful implements Action {
  readonly type = LoginActions.LoginWasSuccessful;

  constructor() {}
}

export class ResetLoginState implements Action {
  readonly type = LoginActions.ResetLoginState;

  constructor() {}
}

export type LoginActionsUnion = Login | LoginFailed | ResetLoginState | LoginWasSuccessful;
