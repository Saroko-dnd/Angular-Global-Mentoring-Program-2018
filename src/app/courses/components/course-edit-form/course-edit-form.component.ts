import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';

import { IAuthor } from '../../../shared/types/iauthor';
import { CoursesService } from '../../services';
import { ICourse, isNumberValidator } from '../../../shared';
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
import { selectedAuthorsValidator } from './validators/authors-selector.validator';

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
  courseEditForm = new FormGroup({
    courseName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    courseDescription: new FormControl('', [
      Validators.required,
      Validators.maxLength(500)
    ]),
    courseDate: new FormControl('', [Validators.required]),
    courseLength: new FormControl('', [Validators.required, isNumberValidator]),
    authorsSelector: new FormControl('', [
      Validators.required,
      selectedAuthorsValidator
    ])
  });

  selectedAuthorsAreValid: boolean;

  ngOnInit() {
    this.subscribeFormControlsToStoreData();
    this.subscribeStoreToFormControlsData();

    this.fullListOfAuthors = this.store.pipe(
      select(state => {
        return state.courses.editForm.authorsMultiSelect.dropdownList;
      })
    );

    this.store
      .pipe(
        select(state => {
          return state.courses.editForm.selectedAuthorsAreValid;
        })
      )
      .subscribe(result => {
        this.selectedAuthorsAreValid = result;
      });

    this.store.dispatch(new InitCourseEditFormData());
  }

  subscribeFormControlsToStoreData() {
    this.store
      .pipe(
        select(state => {
          return state.courses.editForm.course.date;
        })
      )
      .subscribe(date => {
        this.courseEditForm.get('courseDate').setValue(date);
      });

    this.store
      .pipe(
        select(state => {
          return state.courses.editForm.course.description;
        })
      )
      .subscribe(description => {
        this.courseEditForm.get('courseDescription').setValue(description);
      });

    this.store
      .pipe(
        select(state => {
          return state.courses.editForm.course.length;
        })
      )
      .subscribe(length => {
        this.courseEditForm.get('courseLength').setValue(length);
      });

    this.store
      .pipe(
        select(state => {
          return state.courses.editForm.course.name;
        })
      )
      .subscribe(name => {
        this.courseEditForm.get('courseName').setValue(name);
      });

    this.store
      .pipe(
        select(state => {
          return state.courses.editForm.authorsMultiSelect.selectedAuthors;
        }),
        distinctUntilKeyChanged('length')
      )
      .subscribe(selectedAuthors => {
        this.courseEditForm.get('authorsSelector').setValue(selectedAuthors);
      });
  }

  subscribeStoreToFormControlsData() {
    this.courseEditForm
      .get('courseDate')
      .valueChanges.subscribe((newDate: string | null) => {
        if (newDate) {
          this.updateCourseDate(newDate);
        }
      });

    this.courseEditForm
      .get('courseDescription')
      .valueChanges.subscribe((newDescription: string) => {
        this.onCourseDescriptionChange(newDescription);
      });

    this.courseEditForm
      .get('courseLength')
      .valueChanges.subscribe((newLength: number) => {
        this.onCourseDurationChange(newLength);
      });

    this.courseEditForm
      .get('courseName')
      .valueChanges.subscribe((newName: string) => {
        this.onCourseTitleChange(newName);
      });
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
  }

  onAuthorRemoved(removedAuthorInfo: any) {
    this.store.dispatch(
      new RemovedAuthor({
        author: removedAuthorInfo.value
      })
    );
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
  }

  onCourseDurationChange(duration: number) {
    this.store.dispatch(
      new CourseDurationChanged({
        duration
      })
    );
  }

  onCourseTitleChange(title: string) {
    this.store.dispatch(
      new CourseNameChanged({
        name: title
      })
    );
  }

  saveCourse() {
    console.log(this.selectedAuthorsAreValid);
    if (this.selectedAuthorsAreValid) {
      this.store.dispatch(new SaveCourse());
    } else {
      this.authorsTooltip.open();
    }
  }

  updateCourseDate(date: string) {
    this.store.dispatch(new CourseDateChanged({ date }));
  }
}
