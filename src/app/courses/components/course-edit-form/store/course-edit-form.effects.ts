import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { of } from 'rxjs';

import { map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import * as moment from 'moment';

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
  ListOfAuthorsLoaded
} from './course-edit-form.actions';
import { ICourseEditFormState } from './course-edit-form.state';

@Injectable()
export class CourseEditFormEffects {
  @Effect({ dispatch: false })
  cancelCourseEditing$ = this.actions$.pipe(
    ofType(CourseEditFormActions.CancelCourseEditing),
    tap(() => {
      this.router.navigateByUrl('/courses');
    })
  );

  @Effect()
  courseDateChanged$ = this.actions$.pipe(
    ofType(CourseEditFormActions.CourseDateChanged),
    map((courseDateChangedAction: CourseDateChanged) => {
      return new UpdateCourseDate({
        date: moment(courseDateChangedAction.payload.date).format()
      });
    })
  );

  @Effect()
  initCourseEditFormData$ = this.actions$.pipe(
    ofType(CourseEditFormActions.InitCourseEditFormData),
    map(() => {
      this.spinnerService.show();

      if (!this.router.url.endsWith('new')) {
        return [new LoadCourse(), new LoadListOfAuthors()];
      } else {
        return of(new LoadListOfAuthors());
      }
    })
  );

  @Effect()
  loadCourse$ = this.actions$.pipe(
    ofType(CourseEditFormActions.LoadCourse),
    switchMap(() => {
      return this.coursesService
        .getItemById(this.route.snapshot.params['id'])
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

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
    private spinnerService: LoadingSpinnerService,
    private store$: Store<{ courseEditForm: ICourseEditFormState }>
  ) {}
}
