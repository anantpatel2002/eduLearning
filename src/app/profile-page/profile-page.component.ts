import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfilePageService } from './profile-page.service';
import { Profile } from './profile-page.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [EditProfileComponent,RouterOutlet,RouterLink,RouterLinkActive, JsonPipe],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit{
// export class ProfilePageComponent{

  userDetails = signal<Profile | undefined>(undefined).asReadonly();
  profileService = inject(ProfilePageService);

  // userDetails = computed(()=>this.profileService.userReadOnly());

  ngOnInit() {
    console.log("in OnInit");

    this.profileService.getUser();
    this.userDetails = this.profileService.userReadOnly;
  }

}
