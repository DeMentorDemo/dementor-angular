import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {LessonsComponent} from './lessons/lessons.component';
import {PostersComponent} from './posters/posters.component';
import {SearchComponent} from './search/search.component';
import {SettingsComponent} from './settings/settings.component';
import {AboutComponent} from './about/about.component';
import {MakeUsComponent} from './make-us/make-us.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'lessons', component: LessonsComponent},
  {path: 'posters', component: PostersComponent},
  {path: 'search', component: SearchComponent},
  {path: 'settings', component: SettingsComponent},

  {path: 'about', component: AboutComponent},
  {path: 'improve', component: MakeUsComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
