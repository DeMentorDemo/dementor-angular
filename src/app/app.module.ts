import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Angular2TokenService} from 'angular2-token';
import {AppRoutingModule} from './app-routing.module';
import {SuiModule} from 'ng2-semantic-ui';
import {AppComponent} from './app.component';

import {SideMenuModule} from './modules/side-menu/side-menu.module';
import {ToolbarModule} from './modules/toolbar/toolbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    SideMenuModule,
    ToolbarModule
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
