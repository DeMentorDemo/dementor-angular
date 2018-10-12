import {Component, Input, OnInit} from '@angular/core';
import {Message, Thread} from '../../../models';
import {ThreadsService} from '../../../services/threads.service';
import {MessagesService} from '../../../services/messages.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.sass']
})
export class ChatThreadComponent implements OnInit {
  @Input() thread: Thread;
  selected = false;
  unreadMessagesCount: number;

  constructor(public threadsService: ThreadsService,
              public messagesService: MessagesService) {
  }

  ngOnInit() {
    this.threadsService.currentThread
      .subscribe((currentThread: Thread) => {
        this.selected = currentThread &&
          this.thread &&
          (currentThread.id === this.thread.id);
      });

    this.messagesService.messages
      .subscribe((messages: Message[]) => {
        this.unreadMessagesCount =
          _.reduce(
            messages, (sum: number, m: Message) => {
              if (m && !m.isRead && this.thread && m.thread.id && m.thread.id === this.thread.id) {
                sum = sum + 1;
              }
              return sum;
            },
            0
          );
      });
  }

  clicked(event: any): void {
    this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();
  }
}
