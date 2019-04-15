import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { CoursesService } from '../../services';
import { ICourse } from '../../../shared';
import { FilterPipe } from '../../../shared/pipes';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerService } from 'src/app/core/services';
import { ICourseListState } from './store/course-list.state';
import {
  LoadPage,
  DeleteItem,
  EditItem,
  ActivateSearch,
  PageChanged
} from './store/course-list.actions';

@Component({
  selector: 'learn-portal-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private filterPipe: FilterPipe,
    private modalService: NgbModal,
    private router: Router,
    private spinnerService: LoadingSpinnerService,
    private store: Store<{ courses: { list: ICourseListState } }>
  ) {}

  courses$: Observable<ICourse[]>;
  numberOfCourses$: Observable<number>;
  pageCapacity$: Observable<number>;
  page$: Observable<number>;
  searchQuery$: Observable<string>;

  page: number;

  onItemDeleted(deletedCourseId: string, confirmCourseDeletionModal: any) {
    this.modalService.open(confirmCourseDeletionModal).result.then(
      result => {
        if (result === 'Yes') {
          this.store.dispatch(
            new DeleteItem({
              deletedCourseId
            })
          );
        }
      },
      reason => {}
    );
  }

  onItemEdit(courseId: string): void {
    this.store.dispatch(
      new EditItem({
        courseId
      })
    );
  }

  onSearchActivated(textFragment: string) {
    this.store.dispatch(
      new ActivateSearch({
        textFragment
      })
    );
  }

  pageChanged(pageNumber: number) {
    this.store.dispatch(
      new PageChanged({
        newPageNumber: pageNumber
      })
    );
  }

  ngOnInit() {
    this.courses$ = this.store.pipe(
      select(state => {
        return state.courses.list.courses;
      })
    );

    this.numberOfCourses$ = this.store.pipe(
      select(state => {
        return state.courses.list.numberOfCourses;
      })
    );

    this.pageCapacity$ = this.store.pipe(
      select(state => {
        return state.courses.list.pageCapacity;
      })
    );

    this.page$ = this.store.pipe(
      select(state => {
        return state.courses.list.page;
      })
    );

    this.searchQuery$ = this.store.pipe(
      select(state => {
        return state.courses.list.searchQuery;
      })
    );

    this.page$.subscribe(newPageNumber => {
      this.store.dispatch(
        new LoadPage({
          pageNumber: newPageNumber - 1
        })
      );
    });
  }
}
