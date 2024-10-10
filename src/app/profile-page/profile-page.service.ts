import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { Profile } from './profile-page.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getCookie, setCookie } from '../utils/cookies.utils';

@Injectable({
  providedIn: 'root',
})
export class ProfilePageService {
  user = signal<Profile | undefined>(undefined);

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  userReadOnly = this.user.asReadonly();

  getUser() {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${getCookie('JwtToken')}`,
      'X-Requested-With': 'XMLHttpRequest'
    });

    const subscription = this.httpClient
      .get<Profile>('http://localhost:8080/api/user/username',{headers,withCredentials:true})
      .subscribe({
        next: (resData) => {
          console.log(resData);
          this.user.set(resData);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  saveUser(updatedUser:Profile){

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${getCookie('JwtToken')}`,
      'X-Requested-With': 'XMLHttpRequest'
    });

    this.httpClient.put<Profile>('http://localhost:8080/api/user',updatedUser,{headers,withCredentials:true}).subscribe({
      next:(resData)=>{
        console.log(resData);
        this.user.set(resData);
      }
    });;
  }

  login(auth:{email:string,password:string}){
    this.httpClient.post("http://localhost:8080/api/login",auth,{
        "responseType":"text"
    }).subscribe({
      next:resData=>{
        console.log(resData);
        setCookie('JwtToken',resData);
        
      }
    })
  }
}
