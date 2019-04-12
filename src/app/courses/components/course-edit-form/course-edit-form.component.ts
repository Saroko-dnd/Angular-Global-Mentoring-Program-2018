import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

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
  CourseDurationChanged
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

  authorsMultiSelect: IMultiSelectorModel = {
    dropdownList: [],
    selectedAuthors: []
  };

  course: ICourse = {
    authors: [],
    date: null,
    description: null,
    length: null,
    id: null,
    name: null,
    isTopRated: false
  };

  formIsValid = false;
  selectedAuthorsAreValid = false;

  ngOnInit() {
    // this.store.dispatch(new InitCourseEditFormData());

    this.coursesService.getAuthors().subscribe(authorsList => {
      this.authorsMultiSelect.dropdownList = authorsList.map(author => {
        return {
          id: author.id,
          firstName: author.firstName,
          lastName: author.lastName,
          name: `${author.firstName} ${author.lastName}`
        };
      });
    });

    if (!this.router.url.endsWith('new')) {
      this.coursesService
        .getItemById(this.route.snapshot.params['id'])
        .subscribe(course => {
          this.course = course;

          this.authorsMultiSelect.selectedAuthors = this.course.authors.map(
            author => {
              return {
                id: author.id,
                firstName: author.firstName,
                lastName: author.lastName,
                name: `${author.firstName} ${author.lastName}`
              };
            }
          );
        });
    }
  }

  cancelCourseEditing() {
    // this.store.dispatch(new CancelCourseEditing());
    this.router.navigateByUrl('/courses');
  }

  onAuthorAdded(addedAuthor: IAuthorForMultiSelector) {
    /*this.store.dispatch(
      new AddedNewAuthor({
        author: addedAuthor
      })
    );*/
    console.log(addedAuthor);
  }

  onAuthorRemoved(removedAuthorInfo: any) {
    /*this.store.dispatch(
      new AddedNewAuthor({
        author: removedAuthorInfo.value
      })
    );*/
    console.log(removedAuthorInfo);
  }

  onAllAuthorsRemoved() {
    /*this.store.dispatch(
      new AllAuthorsRemoved()
    );*/
    console.log('all authores are removed');
  }

  onCourseDurationChange(duration: number) {
    /*this.store.dispatch(
      new CourseDurationChanged({
        duration
      })
    );*/
    console.log(`Course duration changed to: ${duration}`);
  }

  saveCourse() {
    this.validate();

    if (this.selectedAuthorsAreValid) {
      this.course.authors = [];

      this.authorsMultiSelect.selectedAuthors.forEach(author => {
        this.course.authors.push({
          id: author.id,
          firstName: author.firstName,
          lastName: author.lastName
        });
      });

      this.spinnerService.show();
      if (!this.router.url.endsWith('new')) {
        this.coursesService.updateItem(this.course).subscribe(response => {
          this.router.navigateByUrl('/courses');
          this.spinnerService.hide();
        });
      } else {
        this.coursesService.createCourse(this.course).subscribe(response => {
          this.router.navigateByUrl('/courses');
          this.spinnerService.hide();
        });
      }
    }
  }

  updateCourseDate(date: Date) {
    const courseDate = moment(date);

    this.course.date = courseDate.format();
  }

  validate() {
    if (this.authorsMultiSelect.selectedAuthors.length) {
      this.selectedAuthorsAreValid = true;
    }

    this.authorsTooltip.open();
    this.selectedAuthorsAreValid = false;
  }
}
