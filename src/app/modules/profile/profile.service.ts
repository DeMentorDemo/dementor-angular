import {Injectable} from '@angular/core';
import {ApiService} from '../../api.service';

@Injectable()
export class ProfileService {

  constructor(private api: ApiService) {
  }

  public getUserDetails() {
    return this.api.get('/current_user');
  }

  public getUserDetailsById(id: String) {
    return this.api.get('/users/' + id);
  }
}
