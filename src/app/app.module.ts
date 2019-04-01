import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { CoreModule } from './core';
import { CoursesModule } from './courses';
import { LoginModule } from './login';

import { AppComponent } from './app.component';

import { appRoutes } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    EffectsModule.forRoot([]),
    LoginModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
