import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { CoursesService } from '../../services';
import { ICourse } from '../../../shared';
import { FilterPipe } from '../../../shared/pipes';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerService } from 'src/app/core/services';

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
    private router: Router,
    private spinnerService: LoadingSpinnerService
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
          this.spinnerService.show();

          this.coursesService
            .removeItem(deletedCourseId)
            .subscribe(response => {
              if (this.page !== 1 && this.courses.length === 1) {
                this.page -= 1;
              }

              this.numberOfCourses -= 1;

              this.coursesService
                .getList(this.page - 1, this.pageCapacity)
                .subscribe(coursesData => {
                  this.courses = coursesData.courses;
                  this.spinnerService.hide();
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
    this.spinnerService.show();
    this.searchQuery = textFragment;

    this.coursesService
      .getList(0, this.pageCapacity, textFragment)
      .subscribe(coursesInfo => {
        this.courses = coursesInfo.courses;
        this.numberOfCourses = coursesInfo.length;

        this.spinnerService.hide();
      });
  }

  pageChanged(pageNumber: number) {
    this.spinnerService.show();

    this.coursesService
      .getList(pageNumber - 1, this.pageCapacity, this.searchQuery)
      .subscribe(coursesInfo => {
        this.courses = coursesInfo.courses;

        this.spinnerService.hide();
      });
  }

  ngOnInit() {
    this.coursesService
      .getList(this.page - 1, this.pageCapacity)
      .subscribe(coursesData => {
        this.courses = coursesData.courses;
        this.numberOfCourses = coursesData.length;
      });
  }
}
