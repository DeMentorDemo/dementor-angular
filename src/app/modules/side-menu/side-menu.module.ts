import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {ContactsModule} from '../contacts/contacts.module';
import {HomeModule} from '../home/home.module';
import {LessonsModule} from '../lessons/lessons.module';
import {PostersModule} from '../posters/posters.module';
import {SettingsModule} from '../settings/settings.module';
import {AppRoutingModule} from '../../app-routing.module';
import {SearchModule} from '../search/search.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    ContactsModule,
    LessonsModule,
    PostersModule,
    SearchModule,
    SettingsModule
  ],
  declarations: [SideMenuComponent],
  exports: [SideMenuComponent]
})
export class SideMenuModule {
}
