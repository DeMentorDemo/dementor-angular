import {Injectable} from '@angular/core';
import {ApiService} from '../../api.service';
import {User} from '../../shared/models/user.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(private api: ApiService) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.api.get('/users')
      .map(res => {
        return res.data.map((user: User) => {
          return new User(user);
        });
      });
  }
}
