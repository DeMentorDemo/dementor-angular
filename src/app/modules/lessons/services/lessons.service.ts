import { Injectable } from '@angular/core';
import { MessagesService } from './messages.service';
import { ThreadsService } from './threads.service';
import { UserService } from './user.service';
import { Message, Thread } from '../models';
import { ApiService } from '../../../api.service';
import { User } from '../../../core/models/user.model';
import { Observable } from 'rxjs/Observable';
import { ActionCableService, Channel } from 'angular2-actioncable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class LessonsService {
  users: User[];
  threads: Thread[];
  currentUser: User;
  loaded = false;
  subscription: Subscription;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public userService: UserService,
              public api: ApiService,
              private cableService: ActionCableService) {
  }

  messagesSocketSubscribe() {
    // Open a connection and obtain a reference to the channel
    const channel: Channel = this.cableService
      .cable('ws://localhost:4000/api/cable')
      .channel('MessagesChannel');

    // Subscribe to incoming messages
    this.subscription = channel.received()
      .map(data => {
        const messageData = data.data;
        const author = this.users.find(u => u.id === messageData.attributes.userId.toString()) || this.currentUser;
        const thread = this.threads.find(t => t.id === messageData.attributes.chatId.toString());
        return new Message({
          id: messageData.id,
          author: author,
          sentAt: new Date(messageData.attributes.createdAt),
          text: messageData.attributes.text,
          thread: thread
        });
      })
      .subscribe((message: Message) => this.messagesService.addMessage(message));
  }

  public init(): void {
    if (this.loaded) {
      return;
    }
    // todo: Move to shared service
    this.api.get('/current_user').subscribe(res => {
        this.currentUser = new User(res.data);
        this.userService.setCurrentUser(this.currentUser);
        const usersSubscription$: Observable<any> = this.api.get('/users')
          .map(users_res => {
            return users_res.data.map((user: User) => new User(user));
          });
        usersSubscription$
          .subscribe(users => {
            this.users = users;
            const chatsSubscription$ = this.api.get('/chats')
              .map(chats => {
                return chats.data.map(chat => {
                  const user = users.find(u => u.id === chat.relationships.users.data.find(d => d.id !== this.currentUser.id).id);
                  return new Thread(chat.id, chat.attributes.name, user, user.avatar);
                });
              });

            chatsSubscription$
              .subscribe(threads => {
                this.threads = threads;
                threads.forEach((thread: Thread) => {
                  this.api.get('/chats/' + thread.id + '/messages').subscribe(messages => {
                    if (messages.data.length) {
                      messages.data.forEach(message => {
                        const author = users.find(u => u.id === message.attributes.userId.toString()) || this.currentUser;
                        this.messagesService.addMessage(new Message({
                          author: author,
                          sentAt: new Date(message.attributes.createdAt),
                          text: message.attributes.text,
                          thread: thread
                        }));
                      });
                    } else {
                      this.messagesService.addMessage(new Message({
                        author: this.currentUser,
                        text: 'No messages yet',
                        thread: thread
                      }));
                    }
                  });
                });
              });
          });
      },
      err => console.log(err),
      () => this.loaded = true
    );
  }
}
