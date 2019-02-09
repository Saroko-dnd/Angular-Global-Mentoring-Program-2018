import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent, HeaderComponent, LogoComponent } from './header';
import { FooterComponent } from './footer/footer.component';
import { UserLoginComponent } from './header/components/user-login/user-login.component';

import { AuthorizationService } from './services';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    PageNotFoundComponent,
    UserLoginComponent
  ],
  exports: [HeaderComponent, FooterComponent, PageNotFoundComponent],
  providers: [AuthorizationService]
})
export class CoreModule {}
