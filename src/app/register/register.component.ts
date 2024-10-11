import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  SimpleChanges,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Register } from './register.model';
import { ProfilePageService } from '../profile-page/profile-page.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // @ViewChild('email') fName!:NgModel;
  password = viewChild<NgModel>('password');
  cPassword = viewChild<NgModel>('confirmPassword');
  formData = viewChild<NgForm>('form');

  private profileService = inject(ProfilePageService);

  fullName: string = '';
  userDetails: Register = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleName: 'ROLE_USER',
  };
  agreement = false;
  confirmPassword: string = '';

  invalid = '';

  checkValidity(elem: NgModel) {
    if (
      elem.name === 'confirm password' &&
      this.password()?.control.value !== this.cPassword()?.control.value &&
      (elem.dirty || elem.touched)
    ) {
      return true;
    }

    return (elem.dirty || elem.touched) && elem.invalid;
  }


  addUser() {
    const fullNameArray = this.fullName.split(' ');
    this.userDetails.firstName = fullNameArray[0];
    this.userDetails.lastName = fullNameArray[1];
    this.profileService.addUser(this.userDetails);
  }
}
