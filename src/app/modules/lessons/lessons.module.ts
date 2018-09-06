import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LessonsComponent} from './components/lessons/lessons.component';
import {SuiModule} from 'ng2-semantic-ui';
import {ChatWindowComponent} from './components/chat-window/chat-window.component';
import {ChatThreadsComponent} from './components/chat-threads/chat-threads.component';
import {ChatMessageComponent} from './components/chat-message/chat-message.component';
import {ChatThreadComponent} from './components/chat-thread/chat-thread.component';
import {FormsModule} from '@angular/forms';
import {servicesInjectables} from './services/services';
import {LessonsRoutingModule} from './lessons-routing.module';

@NgModule({
  imports: [
    LessonsRoutingModule,
    CommonModule,
    SuiModule,
    FormsModule
  ],
  declarations: [
    LessonsComponent,
    ChatWindowComponent,
    ChatThreadsComponent,
    ChatMessageComponent,
    ChatThreadComponent],
  exports: [LessonsComponent],
  providers: [servicesInjectables]
})
export class LessonsModule {
}
