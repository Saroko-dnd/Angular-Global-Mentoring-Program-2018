import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent, HeaderComponent, LogoComponent } from './header';
import { FooterComponent } from './footer/footer.component';
import { ProfileNavigationComponent } from './header/components/profile-navigation/profile-navigation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    ProfileNavigationComponent
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule {}
