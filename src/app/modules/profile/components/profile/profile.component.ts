import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../profile.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {User} from '../../../../shared/models/user.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user: User;
  isEditing = false;
  selectedFile: File = null;

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              private http: HttpClient) {
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

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    this.profileService.updateUserDetails(this.user.id, this.selectedFile);
  }

}
