import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseListItemComponent } from './components/course-list/components/course-list-item/course-list-item.component';
import { SearchCourseComponent } from './components/course-list/components/search-course/search-course.component';
import { CreateNewCourseComponent } from './components/create-new-course/create-new-course.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseListComponent, CourseListItemComponent, SearchCourseComponent, CreateNewCourseComponent]
})
export class CoursesModule { }
