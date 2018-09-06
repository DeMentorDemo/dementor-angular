import {Injectable} from '@angular/core';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/do';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../api.service';

@Injectable()
export class AuthService {
  private token: string;

  constructor(private api: ApiService, private router: Router) {

  }

  public signup(email: string, first_name: string, last_name: string, password: string, password_confirmation: string): Observable<any> {
    const body = {
      user: {
        email: email,
        first_name: first_name,
        last_name: last_name,
        password: password,
        password_confirmation: password_confirmation
      }
    };
    return this.api.post('/users', body);
  }

  public login(email: string, password: string): Observable<any> {
    return this.api.post('/auth/login', {email, password})
      .do(res => this.saveToken(res))
      .shareReplay();
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    this.token = '';
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public getUserDetails() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('access_token');
    }
    return this.token;
  }

  private saveToken(authResult): void {
    localStorage.setItem('access_token', authResult.auth_token);
    this.token = authResult.auth_token;
  }
}
