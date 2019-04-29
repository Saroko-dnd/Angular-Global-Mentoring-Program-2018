import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import {
  ROUTER_NAVIGATED,
  RouterNavigatedAction,
  RouterReducerState
} from '@ngrx/router-store';

import { of } from 'rxjs';

import {
  map,
  mergeMap,
  switchMap,
  tap,
  withLatestFrom,
  concatMap
} from 'rxjs/operators';

import * as moment from 'moment';

import cloneDeep from 'lodash/cloneDeep';

import { LoadingSpinnerService } from 'src/app/core/services';

import { CoursesService } from 'src/app/courses/services';

import {
  CourseEditFormActions,
  CourseDateChanged,
  UpdateCourseDate,
  InitCourseEditFormData,
  CourseLoaded,
  LoadCourse,
  LoadListOfAuthors,
  ListOfAuthorsLoaded,
  ValidationOfAuthorsFailed,
  ValidationOfAuthorsPassed,
  SaveCourse,
  CourseSaved,
  AllAuthorsRemoved,
  RemovedAuthor,
  ResetCourseEditFormState
} from './course-edit-form.actions';
import { ICourseEditFormState } from './course-edit-form.state';

@Injectable()
export class CourseEditFormEffects {
  @Effect()
  courseDateChanged$ = this.actions$.pipe(
    ofType(CourseEditFormActions.CourseDateChanged),
    map((courseDateChangedAction: CourseDateChanged) => {
      return new UpdateCourseDate({
        date: moment(courseDateChangedAction.payload.date).format()
      });
    })
  );

  @Effect({ dispatch: false })
  courseEditingCompleted$ = this.actions$.pipe(
    ofType(
      CourseEditFormActions.CourseSaved,
      CourseEditFormActions.CancelCourseEditing
    ),
    tap(() => {
      this.router.navigateByUrl('/courses');
    })
  );

  @Effect()
  initCourseEditFormData$ = this.actions$.pipe(
    ofType(CourseEditFormActions.InitCourseEditFormData),
    switchMap(
      (): (
        | LoadCourse
        | LoadListOfAuthors
        | ResetCourseEditFormState
        | ValidationOfAuthorsFailed)[] => {
        this.spinnerService.show();

        if (!this.router.url.endsWith('new')) {
          return [
            new ResetCourseEditFormState(),
            new LoadCourse(),
            new LoadListOfAuthors()
          ];
        } else {
          return [
            new ResetCourseEditFormState(),
            new LoadListOfAuthors(),
            new ValidationOfAuthorsFailed()
          ];
        }
      }
    )
  );

  @Effect()
  loadCourse$ = this.actions$.pipe(
    ofType(CourseEditFormActions.LoadCourse),
    withLatestFrom(this.store$),
    switchMap((data: [LoadCourse, { router: RouterReducerState }]) => {
      return this.coursesService
        .getItemById(data[1].router.state.root.firstChild.params['id'])
        .pipe(
          map(course => {
            this.spinnerService.hide();

            return new CourseLoaded({ course });
          })
        );
    })
  );

  @Effect()
  loadListOfAuthors$ = this.actions$.pipe(
    ofType(CourseEditFormActions.LoadListOfAuthors),
    switchMap(() => {
      return this.coursesService.getAuthors().pipe(
        map(authors => {
          this.spinnerService.hide();

          return new ListOfAuthorsLoaded({ authors });
        })
      );
    })
  );

  @Effect()
  saveCourse$ = this.actions$.pipe(
    ofType(CourseEditFormActions.SaveCourse),
    withLatestFrom(this.store$),
    concatMap(
      (data: [SaveCourse, { courses: { editForm: ICourseEditFormState } }]) => {
        const stateCopy: ICourseEditFormState = cloneDeep(
          data[1].courses.editForm
        );
        console.log('saveCourse$ effect');
        console.log(
          data[1].courses.editForm.authorsMultiSelect.selectedAuthors.length
        );
        if (
          !data[1].courses.editForm.authorsMultiSelect.selectedAuthors.length
        ) {
          console.log('ValidationOfAuthorsFailed');
          return of(new ValidationOfAuthorsFailed());
        }

        this.spinnerService.show();

        stateCopy.course.authors.length = 0;
        stateCopy.authorsMultiSelect.selectedAuthors.forEach(author => {
          stateCopy.course.authors.push({
            id: author.id,
            firstName: author.firstName,
            lastName: author.lastName
          });
        });

        if (!this.router.url.endsWith('new')) {
          return this.coursesService.updateItem(stateCopy.course).pipe(
            map(() => {
              this.spinnerService.hide();

              return new CourseSaved();
            })
          );
        } else {
          return this.coursesService.createCourse(stateCopy.course).pipe(
            map(() => {
              this.spinnerService.hide();

              return new CourseSaved();
            })
          );
        }
      }
    )
  );

  @Effect()
  changedListOfSelectedAuthors$ = this.actions$.pipe(
    ofType(
      CourseEditFormActions.RemovedAuthor,
      CourseEditFormActions.AllAuthorsRemoved,
      CourseEditFormActions.AddedNewAuthor
    ),
    withLatestFrom(this.store$),
    map(
      (
        data: [
          RemovedAuthor | AllAuthorsRemoved,
          { courses: { editForm: ICourseEditFormState } }
        ]
      ) => {
        console.log('changedListOfSelectedAuthors');
        console.log(
          data[1].courses.editForm.authorsMultiSelect.selectedAuthors.length
        );
        if (
          data[1].courses.editForm.authorsMultiSelect.selectedAuthors.length
        ) {
          return new ValidationOfAuthorsPassed();
        }
        console.log('ValidationOfAuthorsFailed');
        return new ValidationOfAuthorsFailed();
      }
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
    private spinnerService: LoadingSpinnerService,
    private store$: Store<{ courseEditForm: ICourseEditFormState }>
  ) {}
}
