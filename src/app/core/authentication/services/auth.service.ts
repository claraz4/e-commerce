import { Injectable } from '@angular/core';
import {AuthApiService} from './auth-api.service';
import {IUserLogInForm} from '../models/IUserLogInForm';
import {CookieService} from 'ngx-cookie-service';
import {IUserLogInResponse} from '../models/IUserLogInResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storeToken(form: IUserLogInForm) {
    this.authApiService.login(form).subscribe({
      next: data => {
        const accessToken: string = data.accessToken;
        const refreshToken: string = data.refreshToken;

        this.cookieService.set('accessToken', accessToken);
        this.cookieService.set('refreshToken', refreshToken);
      }
    })
  }

  getToken(): string {
    return this.cookieService.get('accessToken');
  }

  isLoggedIn(): boolean {
    const accessToken: string = this.getToken();
    return !!accessToken;
  }

  constructor(private authApiService: AuthApiService, private cookieService: CookieService) { }
}
