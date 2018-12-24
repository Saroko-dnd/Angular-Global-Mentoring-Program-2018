import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../services';
import { ICourse } from 'src/app/shared';

@Component({
  selector: 'learn-portal-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  constructor(private coursesService: CoursesService) {}

  courses: ICourse[];

  onItemDeleted(deletedCourseId: string) {
    console.log(`Course with id ${deletedCourseId} was deleted`);
  }

  ngOnInit() {
    this.courses = this.coursesService.getListOfCourses();
  }
}
