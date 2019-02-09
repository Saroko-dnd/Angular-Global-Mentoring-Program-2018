import { Routes } from '@angular/router';

import { CourseListComponent, CourseEditFormComponent } from './components';
import { AuthorizedUsersGuard } from './guards';

export const coursesRoutes: Routes = [
  { path: 'courses', component: CourseListComponent, canActivate: [AuthorizedUsersGuard] },
  { path: 'courses/:id', component: CourseEditFormComponent, canActivate: [AuthorizedUsersGuard] },
  { path: 'courses/new', component: CourseEditFormComponent, canActivate: [AuthorizedUsersGuard] }
];
