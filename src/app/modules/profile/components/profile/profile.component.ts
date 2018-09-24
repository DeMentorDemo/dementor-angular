import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../profile.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {User} from '../../../../shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id;
    this.route.params.subscribe(params => {
      id = params['id'];
    });
    const profile = (res) => {
      this.user = new User(res.data);
    };
    if (id) {
      this.profileService.getUserDetailsById(id).subscribe(
        profile
      );
    } else {
      this.profileService.getUserDetails().subscribe(
        profile
      );
    }
  }

}
