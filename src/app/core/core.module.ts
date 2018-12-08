import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BreadcrumbsComponent, HeaderComponent, LogoComponent } from "./header";
import { FooterComponent } from "./footer";

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule {}
