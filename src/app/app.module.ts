import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {SuiModule} from 'ng2-semantic-ui';
import {AppComponent} from './app.component';
import {JwtModule} from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';

import {SideMenuModule} from './modules/side-menu/side-menu.module';
import {ToolbarModule} from './modules/toolbar/toolbar.module';
import {AuthGuard} from './modules/auth/auth.guard';
import {AuthService} from './modules/auth/auth.service';
import {AuthModule} from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:4000']
      }
    }),
    SideMenuModule,
    ToolbarModule,
    AuthModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
