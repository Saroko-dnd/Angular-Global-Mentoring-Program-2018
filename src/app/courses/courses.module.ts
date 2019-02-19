import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { NgbModalModule, NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import {
  CourseDurationInputComponent,
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
    NgbModalModule,
    NgbTooltipModule,
    NgbPaginationModule,
    NgSelectModule,
    RouterModule.forRoot(coursesRoutes),
    SharedModule,

  ],
  declarations: [
    CourseDurationInputComponent,
    CourseEditFormComponent,
    CourseListComponent,
    CourseListItemComponent,
    DurationPipe,
    SearchCourseComponent,
    ShowCourseFreshnessDirective
  ],
  exports: [CourseListComponent, CourseEditFormComponent],
  providers: [
    CoursesService,
    { provide: 'COURSES_NUMBER_API_PATH', useValue: '/courses/number' },
    { provide: 'COURSES_LIST_API_PATH', useValue: '/courses' },
  ]
})
export class CoursesModule {}
