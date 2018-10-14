import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message, Thread } from '../../models';
import { MessagesService } from '../../services/messages.service';
import { ThreadsService } from '../../services/threads.service';
import { UserService } from '../../services/user.service';
import { User } from '../../../../core/models/user.model';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-chat-window',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.sass']
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public userService: UserService,
              private api: ApiService,
              public el: ElementRef) {
  }

  ngOnInit() {
    this.messages = this.threadsService.currentThreadMessages;

    this.draftMessage = new Message();

    this.threadsService.currentThread.subscribe(
      (thread: Thread) => {
        this.currentThread = thread;
      });

    this.userService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        });

    this.messages
      .subscribe(
        () => {
          setTimeout(() => {
            this.scrollToBottom();
          });
        });
  }

  onEnter(event: any): void {
    if (this.draftMessage.text) {
      this.sendMessage();
      event.preventDefault();
    }
  }

  sendMessage(): void {
    const m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    this.api.post('/chats/' + m.thread.id + '/messages', {
      message: { userId: m.author.id, chatId: m.thread.id, text: m.text }
    }).subscribe(() => {
      this.draftMessage = new Message();
    });
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.scrollable');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }

}
