import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {AboutModule} from '../about/about.module';
import {MakeUsModule} from '../make-us/make-us.module';
import {ProfileModule} from '../profile/profile.module';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AboutModule,
    MakeUsModule,
    ProfileModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule {
}
