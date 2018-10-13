import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ThreadsService } from '../../services/threads.service';
import { Thread } from '../../models';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/first';

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
    this.threadsOptions
      .debounceTime(300)
      .first()
      .subscribe((threads: Thread[]) => {
      this.threadsService.setCurrentThread(threads[0]);
    });
    this.searchInput = new FormControl();
    this.threads = this.threadsOptions;
    this.searchInput.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(input => {
        this.threads = this.threadsOptions
          .map((threads: Thread[]) => {
            return threads.filter((thread: Thread) => {
              return thread.name.toLowerCase().search(input.toLowerCase()) >= 0;
            });
          });
      });
  }

}
