import { Routes } from '@angular/router';

import { CourseListComponent, CreateNewCourseComponent } from './components';

export const coursesRoutes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/add', component: CreateNewCourseComponent },
  { path: 'courses/edit', component: CreateNewCourseComponent }
];
