import { Action } from '@ngrx/store';

export enum CourseListActions {
  ActivateSearch = '[course-list Component] Activate search',
  DeleteItem = '[course-list Component] Delete item',
  EditItem = '[course-list Component] Edit item',
  LoadPage = '[course-list Component] Load page'
}

export class ActivateSearch implements Action {
  readonly type = CourseListActions.ActivateSearch;

  constructor(public payload: { textFragment: string }) {}
}

export class DeleteItem implements Action {
  readonly type = CourseListActions.DeleteItem;

  constructor(public payload: { deletedCourseId: string }) {}
}

export class EditItem implements Action {
  readonly type = CourseListActions.EditItem;

  constructor(public payload: { courseId: string }) {}
}

export class LoadPage implements Action {
  readonly type = CourseListActions.LoadPage;

  constructor(public payload: { pageNumber: number }) {}
}

export type UserDataStoreActionsUnion =
  | ActivateSearch
  | DeleteItem
  | EditItem
  | LoadPage;
