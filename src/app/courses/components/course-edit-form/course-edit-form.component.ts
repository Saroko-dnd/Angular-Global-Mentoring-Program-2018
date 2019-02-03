import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { cloneDeep } from 'lodash';

import { IAuthor } from 'src/app/shared/types/iauthor';
import { CoursesService } from '../../services';
import { ICourse } from 'src/app/shared';

@Component({
  selector: 'learn-portal-course-edit-form',
  templateUrl: './course-edit-form.component.html',
  styleUrls: ['./course-edit-form.component.scss']
})
export class CourseEditFormComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  course: ICourse = {
    authors: [],
    creationDate: null,
    description: null,
    duration: null,
    id: null,
    title: null,
    topRated: false
  };

  authorsMultiSelect = {
    dropdownList: [],
    selectedAuthors: []
  };

  ngOnInit() {
    const authors: IAuthor[] = this.coursesService.getAuthors();

    authors.forEach(author => {
      this.authorsMultiSelect.dropdownList.push({
        id: author.id,
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
          name: `${author.firstName} ${author.lastName}`
        });
      });
    }
  }

  cancelCourseEditing() {
    this.router.navigateByUrl('/courses');
  }

  saveCourse() {
    this.course.authors = [];

    this.authorsMultiSelect.selectedAuthors.forEach(author => {
      const nameParts: string[] = author.name.split(' ');

      this.course.authors.push({
        id: author.id,
        firstName: nameParts[0],
        lastName: nameParts[1]
      });
    });

    if (!this.router.url.endsWith('new')) {
      this.coursesService.updateItem(this.course);
    } else {
      this.coursesService.createCourse(this.course);
    }

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

  updateCourseDate(date: string) {
    this.course.creationDate = new Date(date);
  }
}
