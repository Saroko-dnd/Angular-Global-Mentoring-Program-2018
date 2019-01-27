import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../services';
import { ICourse } from 'src/app/shared';
import { FilterPipe } from 'src/app/shared/pipes';

@Component({
  selector: 'learn-portal-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private _filterPipe: FilterPipe
  ) {}

  private _courses: ICourse[];

  courses: ICourse[];

  onItemDeleted(deletedCourseId: string) {
    console.log(`Course with id ${deletedCourseId} was deleted`);
  }

  onSearchActivated(title: string) {
    this.courses = this._filterPipe.transform(this._courses, 'title', title);
  }

  ngOnInit() {
    this.courses = this.coursesService.getList();
    this._courses = this.courses;
  }
}
