import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../home/components/home/home.component';
import {ContactsComponent} from '../contacts/components/contacts/contacts.component';
import {LessonsComponent} from '../lessons/components/lessons/lessons.component';
import {PostersComponent} from '../posters/components/posters/posters.component';
import {SearchComponent} from '../search/components/search/search.component';
import {SettingsComponent} from '../settings/components/settings/settings.component';
import {AuthGuard} from '../auth/auth.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard]},
  {path: 'lessons', component: LessonsComponent, canActivate: [AuthGuard]},
  {path: 'posters', component: PostersComponent, canActivate: [AuthGuard]},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SideMenuRoutingModule {
}
