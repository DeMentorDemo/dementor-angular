import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Thread, Message } from '../models';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { User } from '../../../core/models/user.model';

const initialMessages: Message[] = [];

type IMessagesOperation = (messages: Message[]) => Message[];

export class MessagesService {
  messages: Observable<Message[]>;
  updates: Subject<any> = new Subject<any>();
  create: Subject<Message> = new Subject<Message>();
  markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() {
    this.messages = this.updates
      .scan((messages: Message[], operation: IMessagesOperation) => {
        return operation(messages);
      }, initialMessages)
      .publishReplay(1)
      .refCount();

    this.create
      .map(function (message: Message): IMessagesOperation {
        return (messages: Message[]) => messages.concat(message);
      })
      .subscribe(this.updates);

    this.markThreadAsRead
      .map((thread: Thread) => {
        return (messages: Message[]) => {
          return messages.map((message: Message) => {
            if (message.thread.id === thread.id) {
              message.isRead = true;
            }
            return message;
          });
        };
      })
      .subscribe(this.updates);
  }

  addMessage(message: Message): void {
    this.create.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.create
      .filter((message: Message) => {
        return (message.thread.id === thread.id) &&
          (message.author.id !== user.id);
      });
  }
}
