import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { ListOfCoursesComponent } from './courses/components/list-of-courses/list-of-courses.component';
import { CourseListItemComponent } from './courses/components/course-list-item/course-list-item.component';
import { SearchCoursesComponent } from './courses/components/search-courses/search-courses.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesComponent, ListOfCoursesComponent, CourseListItemComponent, SearchCoursesComponent]
})
export class CoursesModule { }
