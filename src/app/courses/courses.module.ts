import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  CourseListComponent,
  CourseListItemComponent,
  CreateNewCourseComponent,
  SearchCourseComponent
} from "./components";

@NgModule({
  imports: [CommonModule],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    SearchCourseComponent,
    CreateNewCourseComponent
  ],
  exports: [CourseListComponent, CreateNewCourseComponent]
})
export class CoursesModule {}
