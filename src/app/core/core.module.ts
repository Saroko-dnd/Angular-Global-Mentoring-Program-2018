import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BreadcrumbsComponent, HeaderComponent, LogoComponent } from './header';
import { FooterComponent } from './footer/footer.component';
import { UserLoginComponent } from './header/components/user-login/user-login.component';

import { AuthorizationService } from './services';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [BrowserModule, CommonModule, HttpClientModule, RouterModule],
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    PageNotFoundComponent,
    UserLoginComponent
  ],
  exports: [HeaderComponent, FooterComponent, PageNotFoundComponent],
  providers: [
    AuthorizationService,
    { provide: 'AUTH_URL', useValue: 'http://localhost:3004/auth/login' }
  ]
})
export class CoreModule {}
