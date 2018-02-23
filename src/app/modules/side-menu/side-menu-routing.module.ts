import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../home/components/home/home.component';
import {ContactsComponent} from '../contacts/components/contacts/contacts.component';
import {LessonsComponent} from '../lessons/components/lessons/lessons.component';
import {PostersComponent} from '../posters/components/posters/posters.component';
import {SearchComponent} from '../search/components/search/search.component';
import {SettingsComponent} from '../settings/components/settings/settings.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'lessons', component: LessonsComponent},
  {path: 'posters', component: PostersComponent},
  {path: 'search', component: SearchComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SideMenuRoutingModule {
}
