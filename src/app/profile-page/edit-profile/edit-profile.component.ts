import {  Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { Profile } from '../profile-page.model';
import { ProfilePageService } from '../profile-page.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  userDetails:Profile;
  profileService = inject(ProfilePageService);

  constructor(){
    this.userDetails = {...this.profileService.userReadOnly() as Profile};
  }
  

  saveUser(){
    this.profileService.saveUser(this.userDetails);
  }

}
