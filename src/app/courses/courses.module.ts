import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  CourseListComponent,
  CourseListItemComponent,
  CreateNewCourseComponent,
  SearchCourseComponent
} from './components';

import { coursesRoutes } from './courses.routing';

import { CoursesService } from './services';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forRoot(coursesRoutes)],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    SearchCourseComponent,
    CreateNewCourseComponent
  ],
  exports: [CourseListComponent, CreateNewCourseComponent],
  providers: [CoursesService]
})
export class CoursesModule {}
