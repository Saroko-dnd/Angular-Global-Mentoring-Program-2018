import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import {
  CourseListComponent,
  CourseListItemComponent,
  CreateNewCourseComponent,
  SearchCourseComponent
} from './components';

import { coursesRoutes } from './courses.routing';

import { CoursesService } from './services';
import { ShowCourseFreshnessDirective } from './directives';

import { DurationPipe } from './pipes';
import { SharedModule } from '../shared';
import { CourseDurationComponent } from './components/create-new-course/components';

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
    CourseListComponent,
    CourseListItemComponent,
    CreateNewCourseComponent,
    DurationPipe,
    SearchCourseComponent,
    ShowCourseFreshnessDirective,
  ],
  exports: [CourseListComponent, CreateNewCourseComponent],
  providers: [CoursesService]
})
export class CoursesModule {}
