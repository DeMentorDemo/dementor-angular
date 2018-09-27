import {Injectable} from '@angular/core';
import {MessagesService} from './messages.service';
import {ThreadsService} from './threads.service';
import {UserService} from './user.service';
import {Message, Thread} from '../models';
import {ApiService} from '../../../api.service';
import {User} from '../../../shared/models/user.model';
import * as moment from 'moment';

@Injectable()
export class LessonsService {
  static init(messagesService: MessagesService,
              threadsService: ThreadsService,
              userService: UserService,
              api: ApiService): void {

    // todo: Move to shared service
    api.get('/current_user').subscribe(res => {
      const currentUser: User = new User(res.data);
      userService.setCurrentUser(currentUser);
      api.get('/users').map(users_res => users_res.data.map((user: User) => new User(user)))
        .subscribe(users => {
          let thread: Thread;
          for (const user of users) {
            thread = new Thread('thread-' + user.id, user.getFullName(), user.avatar);
            messagesService.addMessage(new Message({
              author: user,
              sentAt: moment().subtract(1, 'minutes').toDate(),
              text: `Hello world`,
              thread: thread
            }));
            messagesService.messagesForThreadUser(thread, user)
              .forEach((message: Message): void => {
                  messagesService.addMessage(
                    new Message({
                      author: user,
                      text: message.text,
                      thread: thread
                    })
                  );
                },
                null);
          }
          threadsService.setCurrentThread(thread);
        });
    });

  }
}
