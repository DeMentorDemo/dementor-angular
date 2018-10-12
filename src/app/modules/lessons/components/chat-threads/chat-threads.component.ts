import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ThreadsService } from '../../services/threads.service';
import { Thread } from '../../models';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-chat-threads',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.sass']
})
export class ChatThreadsComponent implements OnInit {
  threads: any;
  threadsOptions: Observable<Thread[]>;
  searchInput: FormControl;

  constructor(public threadsService: ThreadsService) {
  }

  ngOnInit() {
    this.threadsOptions = this.threadsService.orderedThreads;
    this.searchInput = new FormControl();
    this.threads = this.threadsOptions;
    this.threadsOptions.subscribe(res => {
      this.threads = new BehaviorSubject<Thread[]>(res);
    });
    this.searchInput.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .flatMap(res => {
        return this.threadsOptions
          .map(threads => {
            return threads.filter((thread: Thread) => {
              return thread.name.toLowerCase().search(res.toLowerCase()) >= 0;
            });
          });
      })
      .subscribe(res => {
        this.threads.next(res);
      });
  }

}
