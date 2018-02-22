import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostersComponent} from './components/posters/posters.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostersComponent],
  exports: [PostersComponent]
})
export class PostersModule {
}
