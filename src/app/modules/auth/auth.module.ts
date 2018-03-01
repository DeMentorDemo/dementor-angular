import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';
import {AuthLoginGuard} from './auth-login.guard';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  providers: [AuthLoginGuard],
  declarations: [LoginComponent, SignupComponent],
  exports: [LoginComponent, AuthRoutingModule]
})
export class AuthModule {
}
