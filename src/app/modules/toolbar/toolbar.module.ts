import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {AboutModule} from '../about/about.module';
import {MakeUsModule} from '../make-us/make-us.module';
import {ToolbarRoutingModule} from './toolbar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    AboutModule,
    MakeUsModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent, ToolbarRoutingModule]
})
export class ToolbarModule {
}
