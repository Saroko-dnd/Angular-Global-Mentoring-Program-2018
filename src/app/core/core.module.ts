import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BreadcrumbsComponent, HeaderComponent, LogoComponent } from './header';
import { FooterComponent } from './footer/footer.component';
import { UserLoginComponent } from './header/components/user-login/user-login.component';

import { AuthorizationService } from './services';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerApiCallsInterceptor } from './interceptors';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { UserDataStoreEffects } from 'src/app/core/header/components/user-login/store/user-data.effects';
import { userDataStateReducer } from 'src/app/core/header/components/user-login/store/user-data.reducers';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    EffectsModule.forFeature([UserDataStoreEffects]),
    StoreModule.forFeature('core', userDataStateReducer)],
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    PageNotFoundComponent,
    UserLoginComponent,
    LoadingSpinnerComponent
  ],
  exports: [FooterComponent, HeaderComponent, LoadingSpinnerComponent, PageNotFoundComponent],
  providers: [
    AuthorizationService,
    { provide: 'DEFAULT_USER_INFO' , useValue: {
      id: 1,
      fakeToken: '',
      name: {
        first: '',
        last: '',
      },
      login: 'Anonymous user',
      password: '',
    }},
    { provide: 'BASE_API_URL', useValue: 'http://localhost:3004' },
    { provide: 'AUTH_API_PATH', useValue: '/auth/login' },
    { provide: 'USER_INFO_API_PATH', useValue: '/auth/userinfo' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerApiCallsInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
