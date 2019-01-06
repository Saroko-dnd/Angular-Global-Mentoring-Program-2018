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
import { ShowCourseFreshnessDirective } from './directives';
import { DurationPipe } from './pipes/duration.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forRoot(coursesRoutes)],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    CreateNewCourseComponent,
    DurationPipe,
    SearchCourseComponent,
    ShowCourseFreshnessDirective
  ],
  exports: [CourseListComponent, CreateNewCourseComponent],
  providers: [CoursesService]
})
export class CoursesModule {}
