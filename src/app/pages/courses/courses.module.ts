import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { ListOfCoursesComponent } from './components/list-of-courses/list-of-courses.component';
import { CourseListItemComponent } from './components/course-list-item/course-list-item.component';
import { SearchCoursesComponent } from './components/search-courses/search-courses.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesComponent, ListOfCoursesComponent, CourseListItemComponent, SearchCoursesComponent]
})
export class CoursesModule { }
