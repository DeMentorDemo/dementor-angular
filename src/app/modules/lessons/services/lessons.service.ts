import { Injectable } from '@angular/core';
import { MessagesService } from './messages.service';
import { ThreadsService } from './threads.service';
import { UserService } from './user.service';
import { Message, Thread } from '../models';
import { ApiService } from '../../../api.service';
import { User } from '../../../core/models/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LessonsService {
  loaded = false;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public userService: UserService,
              public api: ApiService) {
  }

  public init(): void {
    if (this.loaded) {
      return;
    }
    // todo: Move to shared service
    this.api.get('/current_user').subscribe(res => {
        const currentUser: User = new User(res.data);
        this.userService.setCurrentUser(currentUser);
        const usersSubscription$: Observable<any> = this.api.get('/users')
          .map(users_res => {
            return users_res.data.map((user: User) => new User(user));
          });
        usersSubscription$
          .subscribe(users => {
            const chatsSubscription$ = this.api.get('/chats')
              .map(chats => {
                return chats.data.map(chat => {
                  const user = users.find(u => u.id === chat.relationships.users.data.find(d => d.id !== currentUser.id).id);
                  return new Thread(chat.id, chat.attributes.name, user, user.avatar);
                });
              });

            chatsSubscription$
              .subscribe(threads => {
                threads.forEach((thread: Thread) => {
                  this.api.get('/chats/' + thread.id + '/messages').subscribe(messages => {
                    if (messages.data.length) {
                      messages.data.forEach(message => {
                        const author = users.find(u => u.id === message.attributes.userId.toString()) || currentUser;
                        this.messagesService.addMessage(new Message({
                          author: author,
                          sentAt: new Date(message.attributes.createdAt),
                          text: message.attributes.text,
                          thread: thread
                        }));
                      });
                    } else {
                      this.messagesService.addMessage(new Message({
                        author: currentUser,
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
