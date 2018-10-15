import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../../services/lessons.service';
import { ThreadsService } from '../../services/threads.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.sass']
})
export class LessonsComponent implements OnInit {

  constructor(public lessonsService: LessonsService,
              private threadsService: ThreadsService) {
  }

  ngOnInit() {
    this.lessonsService.init();
    this.threadsService.setChatConnection();
  }

}
