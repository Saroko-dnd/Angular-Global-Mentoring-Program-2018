import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './header/breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
