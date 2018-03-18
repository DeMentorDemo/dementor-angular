import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactsService} from './contacts.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ContactsService],
  declarations: [ContactsComponent],
  exports: [ContactsComponent]
})
export class ContactsModule {
}
