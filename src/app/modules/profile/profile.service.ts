import {Injectable} from '@angular/core';
import {ApiService} from '../../api.service';
import {Observable} from 'rxjs/Observable';

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

  public updateUserDetails(id: String, file: File): Observable<any> {
    const fd = new FormData();
    fd.append('image', file, file.name);
    return this.api.put('/users/' + id, fd);
  }
}
