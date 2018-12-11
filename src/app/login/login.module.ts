import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components';

import { loginRoutes } from './login.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(loginRoutes)],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {}
