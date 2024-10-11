import { Component, inject } from '@angular/core';
import { ProfilePageService } from '../profile-page.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-security',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account-security.component.html',
  styleUrl: './account-security.component.css'
})
export class AccountSecurityComponent {
  private profileService = inject(ProfilePageService);
  email = this.profileService.userReadOnly()?.email;
  router = inject(Router);
  
  oldPassword = '';
  newPassword = '';

  changePassword(){
    const subscription = this.profileService
      .changePassword(this.oldPassword, this.newPassword)
      .subscribe({
        complete: () => {
          this.router.navigate(['/']).then(() => {
            window.location.reload(); // Refresh the page
          });
        },
        error:(err) => {
          console.log(err);
        }
      });
  }

}
