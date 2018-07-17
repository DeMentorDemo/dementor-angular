import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class ProfileService {
  apiBase = environment.token_auth_config.apiBase;

  constructor(private http: HttpClient) {
  }

  public getUserDetails() {
    return this.http.get<any>(this.apiBase + '/current_user');
  }

  public getUserDetailsById(id: String) {
    return this.http.get<any>(this.apiBase + '/users/' + id);
  }
}
