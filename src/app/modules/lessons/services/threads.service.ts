import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Thread, Message } from '../models';
import { MessagesService } from './messages.service';
import * as _ from 'underscore';
import 'rxjs/add/operator/combineLatest';
import { ActionCableService, Cable, Channel } from 'angular2-actioncable';
import { Subscription } from 'rxjs/Subscription';
import { LessonsService } from './lessons.service';

@Injectable()
export class ThreadsService {
  threads: Observable<{ [key: string]: Thread }>;
  orderedThreads: Observable<Thread[]>;
  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(new Thread());
  currentThreadMessages: Observable<Message[]>;
  subscription: Subscription;
  chatConnection: Cable;

  constructor(public messagesService: MessagesService,
              private cableService: ActionCableService,
              private lessonsService: LessonsService) {
    this.threads = messagesService.messages
      .map((messages: Message[]) => {
        const threads: { [key: string]: Thread } = {};
        messages.map((message: Message) => {
          threads[message.thread.id] = threads[message.thread.id] ||
            message.thread;

          // Cache the most recent message for each thread
          const messagesThread: Thread = threads[message.thread.id];
          if (!messagesThread.lastMessage ||
            messagesThread.lastMessage.sentAt < message.sentAt) {
            messagesThread.lastMessage = message;
          }
        });
        return threads;
      });

    this.orderedThreads = this.threads
      .map((threadGroups: { [key: string]: Thread }) => {
        const threads: Thread[] = _.values(threadGroups);
        return _.sortBy(threads, (t: Thread) => t.lastMessage.sentAt).reverse();
      });

    this.currentThreadMessages = this.currentThread
      .combineLatest(messagesService.messages,
        (currentThread: Thread, messages: Message[]) => {
          if (currentThread && messages.length > 0) {
            return _.chain(messages)
              .filter((message: Message) =>
                (message.thread.id === currentThread.id))
              .map((message: Message) => {
                message.isRead = true;
                return message;
              })
              .value();
          } else {
            return [];
          }
        });

    this.currentThread.subscribe(this.messagesService.markThreadAsRead);
  }

  setCurrentThread(newThread: Thread): void {
    this.currentThread.next(newThread);
  }

  setChatConnection() {
    const authToken = 'Bearer ' + localStorage.getItem('access_token');
    this.chatConnection = this.cableService
      .cable('ws://localhost:4000/api/cable', { 'Authorization': authToken });
  }

  messagesSocketSubscribe(roomId) {
    // Open a connection and obtain a reference to the channel
    const channel: Channel = this.chatConnection
      .channel('MessagesChannel', { room_id: roomId });

    // Subscribe to incoming messages
    this.subscription = channel.received()
      .map(data => {
        const messageData = data.data;
        const author = this.lessonsService.getUsers().find(u => u.id === messageData.attributes.userId.toString()) ||
          this.lessonsService.getCurrentUser();
        const thread = this.lessonsService.getThreads().find(t => t.id === messageData.attributes.chatId.toString());
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
}
