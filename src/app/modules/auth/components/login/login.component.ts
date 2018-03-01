import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  signInUser = {
    email: '',
    password: ''
  };

  errors = '';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    if (this.signInUser.email && this.signInUser.password) {
      this.authService.login(this.signInUser.email, this.signInUser.password)
        .subscribe(
          () => {
            this.router.navigateByUrl('/home');
          },
          (res) => {
            this.errors = res.error.errors[0];
          }
        );
    }
  }
}
