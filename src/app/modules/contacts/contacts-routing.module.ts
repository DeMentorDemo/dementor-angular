import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {ContactsComponent} from './components/contacts/contacts.component';

const routes: Routes = [
  {path: '', component: ContactsComponent},
  {path: 'profile', loadChildren: 'app/modules/profile/profile.module#ProfileModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {
}
