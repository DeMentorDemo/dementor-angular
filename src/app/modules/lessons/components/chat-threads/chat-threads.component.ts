import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ThreadsService} from '../../services/threads.service';
import {Thread} from '../../models';

@Component({
  selector: 'app-chat-threads',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.sass']
})
export class ChatThreadsComponent implements OnInit {
  threads: Observable<Thread[]>;
  threadsOptions: Observable<Thread[]>;
  search_input = '';

  constructor(public threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
    this.threadsOptions = this.threads;
  }

  ngOnInit() {
  }

  search(event) {
    if (this.search_input.length < 3) {
      this.threads = this.threadsOptions;
      return;
    }
    this.threads = this.threadsOptions
      .map(threads => threads.filter((thread: Thread) => thread.name === this.search_input));
  }

}
