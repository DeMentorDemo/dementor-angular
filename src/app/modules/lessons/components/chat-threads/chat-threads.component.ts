import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ThreadsService} from '../../services/threads.service';
import {Thread} from '../../models';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-chat-threads',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.sass']
})
export class ChatThreadsComponent implements OnInit {
  threads: Observable<Thread[]>;
  threadsOptions: Observable<Thread[]>;
  searchInput = new FormControl();

  constructor(public threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
    this.threadsOptions = this.threads;
  }

  ngOnInit() {
    this.threads = this.searchInput.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .flatMap(res => {
        return this.threadsOptions
          .map(threads => threads.filter((thread: Thread) => thread.name.toLowerCase().search(res.toLowerCase()) >= 0));
      });
  }

}
