import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MakeUsComponent} from './components/make-us/make-us.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MakeUsComponent],
  exports: [MakeUsComponent]
})
export class MakeUsModule {
}
