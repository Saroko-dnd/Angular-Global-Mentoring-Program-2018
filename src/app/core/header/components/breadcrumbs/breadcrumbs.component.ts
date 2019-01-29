import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'learn-portal-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  constructor(private location: Location) {}

  isAuth(): boolean {
    return this.location.path() === '/login';
  }
}
