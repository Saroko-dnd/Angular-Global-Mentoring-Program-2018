import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import {
  CourseDurationComponent,
  CourseEditFormComponent,
  CourseListComponent,
  CourseListItemComponent,
  SearchCourseComponent
} from './components';

import { coursesRoutes } from './courses.routing';

import { CoursesService } from './services';
import { ShowCourseFreshnessDirective } from './directives';

import { DurationPipe } from './pipes';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(coursesRoutes),
    SharedModule,
    NgbModalModule
  ],
  declarations: [
    CourseDurationComponent,
    CourseEditFormComponent,
    CourseListComponent,
    CourseListItemComponent,
    DurationPipe,
    SearchCourseComponent,
    ShowCourseFreshnessDirective
  ],
  exports: [CourseListComponent, CourseEditFormComponent],
  providers: [CoursesService]
})
export class CoursesModule {}
