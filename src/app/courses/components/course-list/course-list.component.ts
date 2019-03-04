import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from '../../services';
import { ICourse } from '../../../shared';
import { FilterPipe } from '../../../shared/pipes';

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
    private modalService: NgbModal,
    private router: Router
  ) {}
  courses: ICourse[] = [];
  numberOfCourses: number;
  pageCapacity = 10;
  page = 1;
  searchQuery = '';

  onItemDeleted(deletedCourseId: string, confirmCourseDeletionModal: any) {
    this.modalService.open(confirmCourseDeletionModal).result.then(
      result => {
        if (result === 'Yes') {
          this.coursesService.removeItem(deletedCourseId).subscribe(response => {
            if (this.page !== 1 && this.courses.length === 1) {
              this.page -= 1;
              this.numberOfCourses -= this.pageCapacity;
            }

            this.coursesService.getList(this.page - 1, this.pageCapacity).subscribe(coursesData => {
              this.courses = coursesData.courses;
            });
          });

        }
      },
      reason => {}
    );
  }

  onItemEdit(courseId: string): void {
    this.router.navigate(['/courses', courseId]);
  }

  onSearchActivated(textFragment: string) {
    this.searchQuery = textFragment;

    this.coursesService
      .getList(0, this.pageCapacity, textFragment)
      .subscribe(coursesInfo => {
        this.courses = coursesInfo.courses;
        this.numberOfCourses = coursesInfo.length;
      });
  }

  pageChanged(pageNumber: number) {
    this.coursesService
      .getList(pageNumber - 1, this.pageCapacity, this.searchQuery)
      .subscribe(coursesInfo => {
        this.courses = coursesInfo.courses;
      });
  }

  ngOnInit() {
    this.coursesService.getList(this.page - 1, this.pageCapacity).subscribe(coursesData => {
      this.courses = coursesData.courses;
      this.numberOfCourses = coursesData.length;
    });
  }
}
