import { Action } from '@ngrx/store';
import { ICoursesData } from 'src/app/shared';

export enum CourseListActions {
  ActivateSearch = '[course-list Component] Activate search',
  DecrementPageNumber = '[course-list Component] Decrement page number',
  DeleteItem = '[course-list Component] Delete item',
  EditItem = '[course-list Component] Edit item',
  LoadPage = '[course-list Component] Load page',
  UpdateCourseListData = '[course-list Component] Update course list data',
  UpdateSearchQuery = '[course-list Component] Update search query',
  PageChanged = '[course-list Component] Page changed'
}

export class ActivateSearch implements Action {
  readonly type = CourseListActions.ActivateSearch;

  constructor(public payload: { textFragment: string }) {}
}

export class DeleteItem implements Action {
  readonly type = CourseListActions.DeleteItem;

  constructor(
    public payload: {
      deletedCourseId: string;
    }
  ) {}
}

export class EditItem implements Action {
  readonly type = CourseListActions.EditItem;

  constructor(public payload: { courseId: string }) {}
}

export class LoadPage implements Action {
  readonly type = CourseListActions.LoadPage;

  constructor(
    public payload: {
      pageNumber: number;
    }
  ) {}
}

export class PageChanged implements Action {
  readonly type = CourseListActions.PageChanged;

  constructor(
    public payload: {
      newPageNumber: number;
    }
  ) {}
}

export class UpdateCourseListData implements Action {
  readonly type = CourseListActions.UpdateCourseListData;

  constructor(
    public payload: {
      coursesData: ICoursesData;
    }
  ) {}
}

export class UpdateSearchQuery implements Action {
  readonly type = CourseListActions.UpdateSearchQuery;

  constructor(
    public payload: {
      newSearchQuery: string;
    }
  ) {}
}

export class DecrementPageNumber implements Action {
  readonly type = CourseListActions.DecrementPageNumber;

  constructor() {}
}

export type CourseListActionsUnion =
  | ActivateSearch
  | DecrementPageNumber
  | DeleteItem
  | EditItem
  | LoadPage
  | PageChanged
  | UpdateCourseListData
  | UpdateSearchQuery;
