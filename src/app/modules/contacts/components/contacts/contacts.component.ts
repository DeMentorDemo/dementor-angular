import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../../contacts.service';
import {User} from '../../../../shared/models/user.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  users: User[];

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

}
