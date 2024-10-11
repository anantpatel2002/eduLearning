import { Component, DestroyRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfilePageService } from '../profile-page/profile-page.service';
import { setCookie } from '../utils/cookies.utils';
import { Router } from '@angular/router';

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
  router = inject(Router)
  private destroyRef = inject(DestroyRef);

  loginUser(){
    console.log(this.authDetails);
    
    // this.profileService.login(this.authDetails);
    
    const subscription = this.profileService.login(this.authDetails)
    .subscribe({
      next: (resData) => {
        console.log(resData);

        setCookie('JwtToken', resData);
      },
      complete: () => {
        this.router.navigate(['/profile'])
        .then(
          ()=>window.location.reload()
        );
      },
      error:(err) => {
        console.log(err);
      }
    });

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })



  }

}
