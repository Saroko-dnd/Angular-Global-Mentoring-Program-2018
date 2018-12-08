import { Routes } from "@angular/router";

import { CourseListComponent } from "./courses/components/course-list/course-list.component";
import { CreateNewCourseComponent } from "./courses/components/create-new-course/create-new-course.component";
import { LoginComponent } from "./login/components/login/login.component";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/courses", pathMatch: "full" },
  { path: "courses", component: CourseListComponent },
  { path: "login", component: LoginComponent },
  { path: "create-new-course", component: CreateNewCourseComponent }
];
