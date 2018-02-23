import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from '../about/components/about/about.component';
import {MakeUsComponent} from '../make-us/components/make-us/make-us.component';
import {ProfileComponent} from '../profile/components/profile/profile.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'improve', component: MakeUsComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ToolbarRoutingModule {
}
