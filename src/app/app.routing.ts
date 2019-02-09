import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
