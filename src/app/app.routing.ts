import { Routes } from "@angular/router";

import { CourseListComponent, CreateNewCourseComponent } from "./courses";
import { LoginComponent } from "./login";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/courses", pathMatch: "full" },
  { path: "courses", component: CourseListComponent },
  { path: "login", component: LoginComponent },
  { path: "create-new-course", component: CreateNewCourseComponent }
];
