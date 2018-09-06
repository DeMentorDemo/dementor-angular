import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../profile.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

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

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id;
    this.route.params.subscribe(params => {
      id = params['id'];
    });
    const profile = (res) => {
      this.user = res.data.attributes;
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
