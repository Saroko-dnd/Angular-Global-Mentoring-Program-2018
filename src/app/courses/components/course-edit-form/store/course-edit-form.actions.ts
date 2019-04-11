import { Action } from '@ngrx/store';
import { ICourse, ICoursesData } from 'src/app/shared';
import { IAuthorForMultiSelector } from 'src/app/courses/components/course-edit-form/types/author-for-multi-selector';
import { IMultiSelectorModel } from 'src/app/courses/components/course-edit-form/types/multi-selector-model';
import { IAuthor } from 'src/app/shared/types/iauthor';

export enum CourseEditFormActions {
  AddedNewAuthor = '[course-edit-form Component] Added new author',
  AllAuthorsRemoved = '[course-edit-form Component] All authors removed',
  CancelCourseEditing = '[course-edit-form Component] Cancel course editing',
  CourseDateChanged = '[course-edit-form Component] Course date changed',
  CourseDescriptionChanged = '[course-edit-form Component] Course description changed',
  CourseDurationChanged = '[course-edit-form Component] Course duration changed',
  CourseLoaded = '[course-edit-form Component] Course loaded',
  CourseNameChanged = '[course-edit-form Component] Course name changed',
  InitCourseEditFormData = '[course-edit-form Component] Initialize course edit form data',
  ListOfAuthorsLoaded = '[course-edit-form Component] List of authors loaded',
  LoadCourse = '[course-edit-form Component] Load course',
  LoadListOfAuthors = '[course-edit-form Component] Load list of authors',
  RemovedAuthor = '[course-edit-form Component] Removed author',
  ResetAuthorsValidationState = '[course-edit-form Component] Reset authors validation state',
  SaveCourse = '[course-edit-form Component] Save course',
  UpdateCourseDate = '[course-edit-form Component] Update course date',
  UpdateListOfSelectedAuthors = '[course-edit-form Component] Update course date',
  ValidateCourseAuthors = '[course-edit-form Component] Validate course authors',
  ValidationFinished = '[course-edit-form Component] Finished validation of course authors'
}

export class AddedNewAuthor implements Action {
  readonly type = CourseEditFormActions.AddedNewAuthor;

  constructor(public payload: { author: IAuthorForMultiSelector }) {}
}

export class AllAuthorsRemoved implements Action {
  readonly type = CourseEditFormActions.AllAuthorsRemoved;

  constructor() {}
}

export class CancelCourseEditing implements Action {
  readonly type = CourseEditFormActions.CancelCourseEditing;

  constructor() {}
}

export class CourseDateChanged implements Action {
  readonly type = CourseEditFormActions.CourseDateChanged;

  constructor(public payload: { date: Date }) {}
}

export class CourseDescriptionChanged implements Action {
  readonly type = CourseEditFormActions.CourseDescriptionChanged;

  constructor(public payload: { description: string }) {}
}

export class CourseDurationChanged implements Action {
  readonly type = CourseEditFormActions.CourseDurationChanged;

  constructor(public payload: { duration: number }) {}
}

export class CourseLoaded implements Action {
  readonly type = CourseEditFormActions.CourseLoaded;

  constructor(public payload: { course: ICourse }) {}
}

export class CourseNameChanged implements Action {
  readonly type = CourseEditFormActions.CourseNameChanged;

  constructor(public payload: { name: string }) {}
}

export class InitCourseEditFormData implements Action {
  readonly type = CourseEditFormActions.InitCourseEditFormData;

  constructor() {}
}

export class ListOfAuthorsLoaded implements Action {
  readonly type = CourseEditFormActions.ListOfAuthorsLoaded;

  constructor(public payload: { authors: IAuthor[] }) {}
}

export class LoadCourse implements Action {
  readonly type = CourseEditFormActions.LoadCourse;

  constructor() {}
}

export class LoadListOfAuthors implements Action {
  readonly type = CourseEditFormActions.LoadListOfAuthors;

  constructor() {}
}

export class RemovedAuthor implements Action {
  readonly type = CourseEditFormActions.RemovedAuthor;

  constructor(public payload: { author: IAuthorForMultiSelector }) {}
}

export class ResetAuthorsValidationState implements Action {
  readonly type = CourseEditFormActions.ResetAuthorsValidationState;

  constructor() {}
}

export class SaveCourse implements Action {
  readonly type = CourseEditFormActions.SaveCourse;

  constructor(
    public payload: { course: ICourse; authors: IMultiSelectorModel }
  ) {}
}

export class UpdateCourseDate implements Action {
  readonly type = CourseEditFormActions.UpdateCourseDate;

  constructor(public payload: { date: string }) {}
}

export class ValidateCourseAuthors implements Action {
  readonly type = CourseEditFormActions.ValidateCourseAuthors;

  constructor() {}
}

export class ValidationFinished implements Action {
  readonly type = CourseEditFormActions.ValidationFinished;

  constructor(public payload: { result: boolean }) {}
}

export type CourseEditFormActionsUnion =
  | AddedNewAuthor
  | AllAuthorsRemoved
  | CancelCourseEditing
  | CourseDateChanged
  | CourseDescriptionChanged
  | CourseDurationChanged
  | CourseLoaded
  | CourseNameChanged
  | InitCourseEditFormData
  | ListOfAuthorsLoaded
  | LoadCourse
  | LoadListOfAuthors
  | RemovedAuthor
  | ResetAuthorsValidationState
  | SaveCourse
  | UpdateCourseDate
  | ValidateCourseAuthors
  | ValidationFinished;
