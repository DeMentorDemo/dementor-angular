import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ThreadsService} from '../../services/ThreadsService';

@Component({
  selector: 'app-chat-threads',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.sass']
})
export class ChatThreadsComponent implements OnInit {
  threads: Observable<any>;

  constructor(public threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }

  ngOnInit() {
  }

}
