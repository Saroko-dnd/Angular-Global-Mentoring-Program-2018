import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../services';
import { ICourse } from 'src/app/shared';
import { FilterPipe } from 'src/app/shared/pipes';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'learn-portal-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private filterPipe: FilterPipe,
    private modalService: NgbModal
  ) {}

  private _courses: ICourse[];

  courses: ICourse[];

  onItemDeleted(deletedCourseId: string, confirmCourseDeletionModal: any) {
    this.modalService.open(confirmCourseDeletionModal).result.then(
      result => {
        let courseIndex: number;

        if (result === 'Yes') {
          courseIndex = this.courses.findIndex(
            course => course.id === deletedCourseId
          );
          if (courseIndex >= 0) {
            this.courses.splice(courseIndex, 1);
          }

          this.coursesService.removeItem(deletedCourseId);
          this._courses = this.coursesService.getList();
        }
      },
      reason => {}
    );
  }

  onSearchActivated(title: string) {
    this.courses = this.filterPipe.transform(this._courses, 'title', title);
  }

  ngOnInit() {
    this.courses = this.coursesService.getList();
    this._courses = this.courses;
  }
}
