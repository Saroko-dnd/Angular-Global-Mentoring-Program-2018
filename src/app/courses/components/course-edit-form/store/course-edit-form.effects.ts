import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { of } from 'rxjs';

import { map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';

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
  RemovedAuthor
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
      CourseEditFormActions.CancelCourseEditing,
      CourseEditFormActions.CourseSaved
    ),
    tap(() => {
      this.router.navigateByUrl('/courses');
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

  @Effect({ dispatch: false })
  saveCourse$ = this.actions$.pipe(
    ofType(CourseEditFormActions.SaveCourse),
    withLatestFrom(this.store$),
    switchMap(
      (data: [SaveCourse, { courseEditForm: ICourseEditFormState }]) => {
        const stateCopy: ICourseEditFormState = cloneDeep(
          data[1].courseEditForm
        );

        if (!data[1].courseEditForm.authorsMultiSelect.selectedAuthors.length) {
          return of(new ValidationOfAuthorsFailed());
        }

        this.spinnerService.show();

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
          { courseEditForm: ICourseEditFormState }
        ]
      ) => {
        if (data[1].courseEditForm.authorsMultiSelect.selectedAuthors.length) {
          return new ValidationOfAuthorsPassed();
        }
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
