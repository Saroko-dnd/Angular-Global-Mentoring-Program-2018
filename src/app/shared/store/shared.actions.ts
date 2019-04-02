import { Action } from '@ngrx/store';

export enum SharedActions {
  EmptyAction = '[Shared Module] Do nothing',
}

export class EmptyAction implements Action {
  readonly type = SharedActions.EmptyAction;

  constructor() {}
}

export type SharedActionsUnion = EmptyAction;
