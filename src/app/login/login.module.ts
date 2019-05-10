import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared';

import { LoginComponent } from './components';

import { loginRoutes } from './login.routing';
import { LoginEffects } from 'src/app/login/store/login.effects';
import { loginStateReducer } from 'src/app/login/store/login.reducers';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([LoginEffects]),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(loginRoutes),
    SharedModule,
    StoreModule.forFeature('login', loginStateReducer)
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {}
