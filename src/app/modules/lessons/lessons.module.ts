import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LessonsComponent} from './components/lessons/lessons.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LessonsComponent],
  exports: [LessonsComponent]
})
export class LessonsModule {
}
