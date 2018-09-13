import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {ThreadsService} from '../../services/threads.service';
import {UserService} from '../../services/user.service';
import {ChatExampleData} from '../../ChatExampleData';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.sass']
})
export class LessonsComponent implements OnInit {

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public userService: UserService) {
    ChatExampleData.init(messagesService, threadsService, userService);
  }

  ngOnInit() {
  }

}
