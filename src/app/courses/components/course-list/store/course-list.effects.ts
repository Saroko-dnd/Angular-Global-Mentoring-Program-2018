import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { LoadingSpinnerService } from 'src/app/core/services';
import {
  CourseListActions,
  ActivateSearch,
  UpdateCourseListData,
  UpdateSearchQuery,
  DeleteItem,
  LoadPage,
  DecrementPageNumber,
  EditItem,
  PageChanged
} from './course-list.actions';
import { CoursesService } from 'src/app/courses/services';
import { ICourseListState } from './course-list.state';

@Injectable()
export class CourseListEffects {
  @Effect()
  activateSearch$ = this.actions$.pipe(
    ofType(CourseListActions.ActivateSearch),
    withLatestFrom(this.store$),
    switchMap((data: [ActivateSearch, { courseList: ICourseListState }]) => {
      this.spinnerService.show();

      return [
        new UpdateSearchQuery({
          newSearchQuery: data[0].payload.textFragment
        }),
        new LoadPage({ pageNumber: 0 })
      ];
    })
  );

  @Effect()
  deleteItem$ = this.actions$.pipe(
    ofType(CourseListActions.DeleteItem),
    withLatestFrom(this.store$),
    mergeMap((data: [DeleteItem, { courseList: ICourseListState }]) => {
      this.spinnerService.show();

      return this.coursesService
        .removeItem(data[0].payload.deletedCourseId)
        .pipe(
          switchMap(() => {
            if (
              data[1].courseList.page !== 1 &&
              data[1].courseList.courses.length === 1
            ) {
              return [
                new DecrementPageNumber(),
                new LoadPage({
                  pageNumber: data[1].courseList.page - 2
                })
              ];
            }

            return [
              new LoadPage({
                pageNumber: data[1].courseList.page - 1
              })
            ];
          })
        );
    })
  );

  @Effect({ dispatch: false })
  editItem$ = this.actions$.pipe(
    ofType(CourseListActions.EditItem),
    tap((editItemAction: EditItem) => {
      this.router.navigate(['/courses', editItemAction.payload.courseId]);
    })
  );

  @Effect()
  loadPage$ = this.actions$.pipe(
    ofType(CourseListActions.LoadPage),
    withLatestFrom(this.store$),
    mergeMap((data: [LoadPage, { courseList: ICourseListState }]) => {
      this.spinnerService.show();

      return this.coursesService
        .getList(
          data[0].payload.pageNumber,
          data[1].courseList.pageCapacity,
          data[1].courseList.searchQuery
        )
        .pipe(
          map(coursesInfo => {
            this.spinnerService.hide();

            return new UpdateCourseListData({ coursesData: coursesInfo });
          })
        );
    })
  );

  @Effect()
  pageChanged$ = this.actions$.pipe(
    ofType(CourseListActions.PageChanged),
    withLatestFrom(this.store$),
    map((data: [PageChanged, { courseList: ICourseListState }]) => {
      return new LoadPage({ pageNumber: data[0].payload.newPageNumber - 1 });
    })
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router,
    private spinnerService: LoadingSpinnerService,
    private store$: Store<{ courseList: ICourseListState }>
  ) {}
}
