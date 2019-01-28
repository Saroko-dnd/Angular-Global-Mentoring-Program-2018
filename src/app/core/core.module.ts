import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent, HeaderComponent, LogoComponent } from './header';
import { FooterComponent } from './footer/footer.component';
import { UserLoginComponent } from './header/components/user-login/user-login.component';

import { AuthorizationService } from 'src/app/core/services';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    UserLoginComponent
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [AuthorizationService],
})
export class CoreModule {}
