import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from '../about/components/about/about.component';
import {MakeUsComponent} from '../make-us/components/make-us/make-us.component';
import {AuthGuard} from '../auth/auth.guard';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'improve', component: MakeUsComponent},
  {path: 'profile', loadChildren: 'app/modules/profile/profile.module#ProfileModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ToolbarRoutingModule {
}
