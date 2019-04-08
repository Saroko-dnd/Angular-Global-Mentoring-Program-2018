import { Action } from '@ngrx/store';
import { ICoursesData } from 'src/app/shared';

export enum CourseEditFormActions {
  CourseDateChanged = '[course-edit-form Component] Course date changed',
  CourseDescriptionChanged = '[course-edit-form Component] Course description changed',
  CourseNameChanged = '[course-edit-form Component] Course name changed'
}

export class CourseDateChanged implements Action {
  readonly type = CourseEditFormActions.CourseDateChanged;

  constructor(public payload: { date: Date }) {}
}

export class CourseDescriptionChanged implements Action {
  readonly type = CourseEditFormActions.CourseDescriptionChanged;

  constructor(public payload: { description: string }) {}
}

export class CourseNameChanged implements Action {
  readonly type = CourseEditFormActions.CourseNameChanged;

  constructor(public payload: { name: string }) {}
}

export type CourseEditFormActionsUnion =
  | CourseDateChanged
  | CourseDescriptionChanged
  | CourseNameChanged;
