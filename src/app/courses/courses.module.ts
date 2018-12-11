import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  CourseListComponent,
  CourseListItemComponent,
  CreateNewCourseComponent,
  SearchCourseComponent
} from './components';

import { coursesRoutes } from './courses.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(coursesRoutes)],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    SearchCourseComponent,
    CreateNewCourseComponent
  ],
  exports: [CourseListComponent, CreateNewCourseComponent]
})
export class CoursesModule {}
