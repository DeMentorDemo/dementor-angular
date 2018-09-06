import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  users = [];

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.getAllUsers().subscribe(
      (res) => {
        for (const user of res.data) {
          this.users.push(user);
        }
      }
    );
  }

}
