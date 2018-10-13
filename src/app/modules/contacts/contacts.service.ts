import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { User } from '../../core/models/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(private api: ApiService) {
  }

  getAllUsers(): Observable<User[]> {
    return this.api.get('/users')
      .map(res => {
        return res.data.map((user: User) => {
          return new User(user);
        });
      });
  }

  createChatWith(id) {
    this.api.post('/chats', { userId: id })
      .subscribe(res => console.log(res));
  }
}
