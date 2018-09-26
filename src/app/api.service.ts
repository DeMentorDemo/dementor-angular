import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class ApiService {
  apiBase = environment.token_auth_config.apiBase;

  constructor(private http: HttpClient) {
  }

  public get(url) {
    return this.http.get<any>(this.apiBase + url);
  }

  public post(url, body) {
    return this.http.post<any>(this.apiBase + url, body);
  }

  public put(url, body) {
    return this.http.put(this.apiBase + url, body);
  }

}
