import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './components/lessons/lessons.component';
import { SuiModule } from 'ng2-semantic-ui';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatThreadsComponent } from './components/chat-threads/chat-threads.component';
import { ChatMessageComponent } from './components/chat-window/chat-message/chat-message.component';
import { ChatThreadComponent } from './components/chat-threads/chat-thread/chat-thread.component';
import { FormsModule } from '@angular/forms';
import { LessonsRoutingModule } from './lessons-routing.module';
import { MessagesService } from './services/messages.service';
import { ThreadsService } from './services/threads.service';
import { UserService } from './services/user.service';
import { LessonsService } from './services/lessons.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionCableService } from 'angular2-actioncable';

@NgModule({
  imports: [
    LessonsRoutingModule,
    CommonModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LessonsComponent,
    ChatWindowComponent,
    ChatThreadsComponent,
    ChatMessageComponent,
    ChatThreadComponent],
  exports: [LessonsComponent],
  providers: [MessagesService, ThreadsService, UserService, LessonsService, ActionCableService]
})
export class LessonsModule {
}
