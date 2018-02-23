import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {ContactsModule} from '../contacts/contacts.module';
import {HomeModule} from '../home/home.module';
import {LessonsModule} from '../lessons/lessons.module';
import {PostersModule} from '../posters/posters.module';
import {SettingsModule} from '../settings/settings.module';
import {SearchModule} from '../search/search.module';
import {SideMenuRoutingModule} from './side-menu-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SideMenuRoutingModule,
    HomeModule,
    ContactsModule,
    LessonsModule,
    PostersModule,
    SearchModule,
    SettingsModule
  ],
  declarations: [SideMenuComponent],
  exports: [SideMenuComponent, SideMenuRoutingModule]
})
export class SideMenuModule {
}
