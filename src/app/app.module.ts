import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CoreModule } from "src/app/core/core.module";
import { CoursesModule } from "src/app/courses/courses.module";
import { LoginModule } from "./login/login.module";

import { AppComponent } from "./app.component";

import { appRoutes } from "./app.routing";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    LoginModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
