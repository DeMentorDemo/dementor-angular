import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LessonsComponent} from './components/lessons/lessons.component';
import {SuiModule} from 'ng2-semantic-ui';

@NgModule({
  imports: [
    CommonModule,
    SuiModule
  ],
  declarations: [LessonsComponent],
  exports: [LessonsComponent]
})
export class LessonsModule {
}
