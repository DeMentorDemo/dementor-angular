import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user = {
    email: '',
    first_name: '',
    last_name: '',
    created_at: ''
  };

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.getUserDetails().subscribe(
      (res) => {
        console.log(res);
        this.user = res;
        const created_at = new Date(res.created_at);
        this.user.created_at = this.pad(created_at.getDay()) + '.' +
          this.pad(created_at.getMonth()) + '.' +
          created_at.getFullYear().toString();
      }
    );
  }

  private pad(num): string {
    return (num < 10) ? '0' + num.toString() : num.toString();
  }

}
