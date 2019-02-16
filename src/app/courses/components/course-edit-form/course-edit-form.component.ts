import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

import { cloneDeep } from 'lodash';

import { IAuthor } from 'src/app/shared/types/iauthor';
import { CoursesService } from '../../services';
import { ICourse } from 'src/app/shared';
import { AuthorizationService } from 'src/app/core';

interface IAuthorForMultiSelector extends IAuthor {
  name: string;
}

interface IMultiSelectorModel {
  dropdownList: IAuthorForMultiSelector[];
  selectedAuthors: IAuthorForMultiSelector[];
}

@Component({
  selector: 'learn-portal-course-edit-form',
  templateUrl: './course-edit-form.component.html',
  styleUrls: ['./course-edit-form.component.scss']
})
export class CourseEditFormComponent implements OnInit {
  constructor(
    private authorizationService: AuthorizationService,
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @ViewChild('authorsTooltip') authorsTooltip: NgbTooltip;

  authorsMultiSelect: IMultiSelectorModel = {
    dropdownList: [],
    selectedAuthors: []
  };

  course: ICourse = {
    authors: [],
    creationDate: null,
    description: null,
    duration: null,
    id: null,
    title: null,
    topRated: false
  };

  formIsValid = false;

  ngOnInit() {
    const authors: IAuthor[] = this.authorizationService
      .getUsers()
      .map(user => {
        return {
          id: user.id,
          firstName: user.name.first,
          lastName: user.name.last
        };
      });

    authors.forEach(author => {
      this.authorsMultiSelect.dropdownList.push({
        id: author.id,
        firstName: author.firstName,
        lastName: author.lastName,
        name: `${author.firstName} ${author.lastName}`
      });
    });

    if (!this.router.url.endsWith('new')) {
      this.course = cloneDeep(
        this.coursesService.getItemById(this.route.snapshot.params['id'])
      );

      this.course.authors.forEach(author => {
        this.authorsMultiSelect.selectedAuthors.push({
          id: author.id,
          firstName: author.firstName,
          lastName: author.lastName,
          name: `${author.firstName} ${author.lastName}`
        });
      });
    }
  }

  cancelCourseEditing() {
    this.router.navigateByUrl('/courses');
  }

  onAuthorAdded(addedAuthor: any) {
    console.log(addedAuthor);
  }

  onAuthorRemoved(removedAuthor: any) {
    console.log(removedAuthor);
  }

  onAllAuthorsRemoved() {
    console.log('all authores are removed');
  }

  saveCourse() {
    this.validate();

    if (this.formIsValid) {
      this.course.authors = [];

      this.authorsMultiSelect.selectedAuthors.forEach(author => {
        this.course.authors.push({
          id: author.id,
          firstName: author.firstName,
          lastName: author.lastName
        });
      });

      if (!this.router.url.endsWith('new')) {
        this.coursesService.updateItem(this.course);
      } else {
        this.coursesService.createCourse(this.course);
      }

      this.router.navigateByUrl('/courses');
    }
  }

  updateCourseDate(date: string) {
    this.course.creationDate = new Date(date);
  }

  validate() {
    if (this.authorsMultiSelect.selectedAuthors.length) {
      this.formIsValid = true;
      return true;
    }

    this.authorsTooltip.open();
    return false;
  }
}
