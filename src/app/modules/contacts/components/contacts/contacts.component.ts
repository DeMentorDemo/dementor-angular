import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../../contacts.service';
import {User} from '../../../../shared/models/user.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.users = this.contactsService.getAllUsers();
  }

}
