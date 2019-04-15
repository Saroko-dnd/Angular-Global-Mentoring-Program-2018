import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';

import { IAuthor } from '../../../shared/types/iauthor';
import { CoursesService } from '../../services';
import { ICourse } from '../../../shared';
import { LoadingSpinnerService } from 'src/app/core/services';
import { IMultiSelectorModel } from './types/multi-selector-model';
import { ICourseEditFormState } from './store/course-edit-form.state';
import {
  InitCourseEditFormData,
  CancelCourseEditing,
  AddedNewAuthor,
  AllAuthorsRemoved,
  CourseDurationChanged,
  CourseNameChanged,
  CourseDescriptionChanged,
  RemovedAuthor,
  SaveCourse,
  CourseDateChanged
} from './store/course-edit-form.actions';
import { IAuthorForMultiSelector } from './types/author-for-multi-selector';

@Component({
  selector: 'learn-portal-course-edit-form',
  templateUrl: './course-edit-form.component.html',
  styleUrls: ['./course-edit-form.component.scss']
})
export class CourseEditFormComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
    private spinnerService: LoadingSpinnerService,
    private store: Store<{ courses: { editForm: ICourseEditFormState } }>
  ) {}

  @ViewChild('authorsTooltip') authorsTooltip: NgbTooltip;

  fullListOfAuthors: Observable<IAuthorForMultiSelector[]>;
  selectedAuthors: Observable<IAuthorForMultiSelector[]>;

  courseDate: Observable<string>;
  courseDescription: Observable<string>;
  courseLength: Observable<number>;
  courseName: Observable<string>;

  selectedAuthorsAreValid: boolean;

  ngOnInit() {
    this.courseDate = this.store.pipe(
      select(state => {
        console.log(state);
        return state.courses.editForm.course.date;
      })
    );

    this.courseDescription = this.store.pipe(
      select(state => {
        console.log(state);
        return state.courses.editForm.course.description;
      })
    );

    this.courseLength = this.store.pipe(
      select(state => {
        console.log(state);
        return state.courses.editForm.course.length;
      })
    );

    this.courseName = this.store.pipe(
      select(state => {
        console.log(state);
        return state.courses.editForm.course.name;
      })
    );

    this.fullListOfAuthors = this.store.pipe(
      select(state => {
        console.log(state);
        return state.courses.editForm.authorsMultiSelect.dropdownList;
      })
    );

    this.selectedAuthors = this.store.pipe(
      select(state => {
        console.log(state);
        return state.courses.editForm.authorsMultiSelect.selectedAuthors;
      })
    );

    this.store
      .pipe(
        select(state => {
          console.log(state);
          return state.courses.editForm.selectedAuthorsAreValid;
        })
      )
      .subscribe(result => {
        this.selectedAuthorsAreValid = result;
      });
    console.log(this.route.snapshot.params['id']);

    this.store.dispatch(new InitCourseEditFormData());
  }

  cancelCourseEditing() {
    this.store.dispatch(new CancelCourseEditing());
  }

  onAuthorAdded(addedAuthor: IAuthorForMultiSelector) {
    this.store.dispatch(
      new AddedNewAuthor({
        author: addedAuthor
      })
    );
    console.log(addedAuthor);
  }

  onAuthorRemoved(removedAuthorInfo: any) {
    this.store.dispatch(
      new RemovedAuthor({
        author: removedAuthorInfo.value
      })
    );
    console.log(removedAuthorInfo);
  }

  onAllAuthorsRemoved() {
    this.store.dispatch(new AllAuthorsRemoved());
    console.log('all authores are removed');
  }

  onCourseDescriptionChange(description: string) {
    this.store.dispatch(
      new CourseDescriptionChanged({
        description
      })
    );
    console.log(`Course description changed to: ${description}`);
  }

  onCourseDurationChange(duration: number) {
    this.store.dispatch(
      new CourseDurationChanged({
        duration
      })
    );
    console.log(`Course duration changed to: ${duration}`);
  }

  onCourseTitleChange(title: string) {
    this.store.dispatch(
      new CourseNameChanged({
        name: title
      })
    );
    console.log(`Course title changed to: ${title}`);
  }

  saveCourse() {
    if (this.selectedAuthorsAreValid) {
      this.store.dispatch(new SaveCourse());
    } else {
      this.authorsTooltip.open();
    }
  }

  updateCourseDate(date: Date) {
    this.store.dispatch(new CourseDateChanged({ date }));
  }
}
