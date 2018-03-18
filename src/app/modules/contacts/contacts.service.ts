import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class ContactsService {
  apiBase = environment.token_auth_config.apiBase;

  constructor(private http: HttpClient) {
  }

  public getAllUsers() {
    return this.http.get<any>(this.apiBase + '/users');
  }
}
