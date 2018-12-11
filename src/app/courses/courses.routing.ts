import { Routes } from '@angular/router';

import { CourseListComponent, CreateNewCourseComponent } from './components';

export const coursesRoutes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/create-new-course', component: CreateNewCourseComponent }
];
