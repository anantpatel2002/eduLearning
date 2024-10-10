import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfilePageService } from '../profile-page/profile-page.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authDetails:{email:string,password:string}={email:"",password:""};
  profileService = inject(ProfilePageService);


  loginUser(){
    console.log(this.authDetails);
    
    this.profileService.login(this.authDetails);
    
  }

}
