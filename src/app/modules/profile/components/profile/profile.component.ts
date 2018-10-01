import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../profile.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../../shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user: User;
  isEditing = false;
  selectedFile: File = null;
  changeAvatarLabel = 'Change Avatar';

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

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    this.changeAvatarLabel = 'Avatar Selected';
  }

  onUpload() {
    this.profileService.updateUserDetails(this.user.id, this.selectedFile)
      .subscribe(res => this.user.avatar = res.avatar);
  }

}
