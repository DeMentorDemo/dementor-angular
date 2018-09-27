import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {ThreadsService} from '../../services/threads.service';
import {UserService} from '../../services/user.service';
import {ApiService} from '../../../../api.service';
import {LessonsService} from '../../services/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.sass']
})
export class LessonsComponent implements OnInit {

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public userService: UserService,
              public apiService: ApiService) {
    LessonsService.init(messagesService, threadsService, userService, apiService);
  }

  ngOnInit() {
  }

}
