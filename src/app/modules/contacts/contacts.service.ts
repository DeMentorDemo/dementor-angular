import {Injectable} from '@angular/core';
import {ApiService} from '../../api.service';

@Injectable()
export class ContactsService {

  constructor(private api: ApiService) {
  }

  public getAllUsers() {
    return this.api.get('/users');
  }
}
