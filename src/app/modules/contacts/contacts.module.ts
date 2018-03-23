import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactsService} from './contacts.service';
import {ContactsRoutingModule} from './contacts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  providers: [ContactsService],
  declarations: [ContactsComponent],
  exports: [ContactsComponent, ContactsRoutingModule]
})
export class ContactsModule {
}
