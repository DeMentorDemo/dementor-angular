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
        for (const user of res) {
          const created_at = new Date(user.created_at);
          user.created_at = this.pad(created_at.getDay()) + '.' +
            this.pad(created_at.getMonth()) + '.' +
            created_at.getFullYear().toString();
          this.users.push(user);
        }
      }
    );
  }

  private pad(num): string {
    return (num < 10) ? '0' + num.toString() : num.toString();
  }


}
