import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SuiModule} from 'ng2-semantic-ui';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {LessonsComponent} from './lessons/lessons.component';
import {MakeUsComponent} from './make-us/make-us.component';
import {PostersComponent} from './posters/posters.component';
import {ProfileComponent} from './profile/profile.component';
import {SearchComponent} from './search/search.component';
import {SettingsComponent} from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    LessonsComponent,
    MakeUsComponent,
    PostersComponent,
    ProfileComponent,
    SearchComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
