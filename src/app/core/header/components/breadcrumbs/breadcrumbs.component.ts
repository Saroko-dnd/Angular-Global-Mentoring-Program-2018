import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { capitalize } from 'lodash';

import { Guid } from 'guid-typescript';

import { IBreadcrumb } from 'src/app/shared/types/ibreadcrumb';

@Component({
  selector: 'learn-portal-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  constructor(
    private location: Location,
    private router: Router,
    @Inject('BREADCRUMBS_TRANSLATION_KEYS_MAPPING') public translationKeys: any,
  ) {}

  breadcrumbsTrail: IBreadcrumb[];

  private navigationEndSubscription: Subscription;

  ngOnInit() {
    this.navigationEndSubscription = this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe(this.updateBreadcrumbs.bind(this));
  }

  ngOnDestroy() {
    // Better to be safe than sorry
    this.navigationEndSubscription.unsubscribe();
  }

  isAuth(): boolean {
    return this.location.path() === '/login';
  }

  updateBreadcrumbs(navigationData: NavigationEnd) {
    const routeParts: string[] = navigationData.urlAfterRedirects
      .replace('/', '')
      .split('/');

    this.breadcrumbsTrail = routeParts.map((routePart, index) => {
      return {
        label: Guid.isGuid(routePart) ? routePart : capitalize(routePart),
        route: routeParts
          .slice(0, index + 1)
          .map(linkPart => `/${linkPart}`)
          .join('')
      };
    });

    this.breadcrumbsTrail[this.breadcrumbsTrail.length - 1].route = null;
  }
}
