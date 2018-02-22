import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './modules/home/components/home/home.component';
import {ContactsComponent} from './modules/contacts/components/contacts/contacts.component';
import {LessonsComponent} from './modules/lessons/components/lessons/lessons.component';
import {PostersComponent} from './modules/posters/components/posters/posters.component';
import {SearchComponent} from './modules/search/components/search/search.component';
import {SettingsComponent} from './modules/settings/components/settings/settings.component';
import {AboutComponent} from './modules/about/components/about/about.component';
import {MakeUsComponent} from './modules/make-us/components/make-us/make-us.component';
import {ProfileComponent} from './modules/profile/components/profile/profile.component';

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
