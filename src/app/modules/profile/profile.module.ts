import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './components/profile/profile.component';
import {ProfileService} from './profile.service';
import {ProfileRoutingModule} from './profile-routing.module';

@NgModule({
  imports: [
    ProfileRoutingModule,
    CommonModule
  ],
  providers: [ProfileService],
  declarations: [ProfileComponent],
  exports: [ProfileComponent]
})
export class ProfileModule {
}
