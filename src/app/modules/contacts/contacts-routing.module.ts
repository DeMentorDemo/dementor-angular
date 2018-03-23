import { NgModule } from '@angular/core';
import {ProfileComponent} from '../profile/components/profile/profile.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';

const routes: Routes = [
  {path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
