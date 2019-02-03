import { Routes } from '@angular/router';

import { CourseListComponent, CourseEditFormComponent } from './components';

export const coursesRoutes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseEditFormComponent },
  { path: 'courses/new', component: CourseEditFormComponent }
];
