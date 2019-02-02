import { Component, OnInit } from '@angular/core';

import { IAuthor } from 'src/app/shared/types/iauthor';
import { CoursesService } from '../../services';

@Component({
  selector: 'learn-portal-course-edit-form',
  templateUrl: './course-edit-form.component.html',
  styleUrls: ['./course-edit-form.component.scss']
})
export class CourseEditFormComponent implements OnInit {
  constructor(private coursesService: CoursesService) {}

  authorsMultiSelect: any = {
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
  }

  cancelCourseEditing() {
    console.log('cancelCourseEditing');
  }

  saveCourse() {
    console.log('saveCourse');
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
}
