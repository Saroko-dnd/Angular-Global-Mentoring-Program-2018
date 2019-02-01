import { Routes } from '@angular/router';

import { CourseListComponent, CourseEditFormComponent } from './components';

export const coursesRoutes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/add', component: CourseEditFormComponent },
  { path: 'courses/edit', component: CourseEditFormComponent }
];
