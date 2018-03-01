import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthLoginGuard} from './auth-login.guard';
import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [AuthLoginGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [AuthLoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
