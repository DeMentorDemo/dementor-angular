import {Injectable} from '@angular/core';
import {MessagesService} from './messages.service';
import {ThreadsService} from './threads.service';
import {UserService} from './user.service';
import {Message, Thread} from '../models';
import {ApiService} from '../../../api.service';
import {User} from '../../../shared/models/user.model';
import * as moment from 'moment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LessonsService {
  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public userService: UserService,
              public api: ApiService) {
  }

  public init(): void {
    // todo: Move to shared service
    this.api.get('/current_user').subscribe(res => {
      const currentUser: User = new User(res.data);
      this.userService.setCurrentUser(currentUser);
      const usersSubscription$: Observable<any> = this.api.get('/users').map(users_res => {
        return users_res.data.map((user: User) => new User(user));
      });
      usersSubscription$
        .subscribe(users => {
          let thread: Thread;
          for (const user of users) {
            thread = new Thread('thread-' + user.id, user.getFullName(), user.avatar);
            this.messagesService.addMessage(new Message({
              author: user,
              sentAt: moment().subtract(1, 'minutes').toDate(),
              text: `Hello world`,
              thread: thread
            }));
            this.messagesService.messagesForThreadUser(thread, user)
              .forEach((message: Message): void => {
                  this.messagesService.addMessage(
                    new Message({
                      author: user,
                      text: message.text,
                      thread: thread
                    })
                  );
                },
                null);
          }
          this.threadsService.setCurrentThread(thread);
        });
    });

  }
}
