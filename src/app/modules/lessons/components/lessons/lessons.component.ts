import { Component, OnInit } from '@angular/core';
import {LessonsService} from '../../services/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.sass']
})
export class LessonsComponent implements OnInit {

  constructor(public lessonsService: LessonsService) {
  }

  ngOnInit() {
    this.lessonsService.init();
    this.lessonsService.messagesSocketSubscribe();
  }

}
