import { Injectable } from '@angular/core';
import {AuthApiService} from './auth-api.service';
import {IUserLogInForm} from '../models/IUserLogInForm';
import {CookieService} from 'ngx-cookie-service';
import {IUserLogInResponse} from '../models/IUserLogInResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storeToken(accessToken: string, refreshToken: string) {
    this.cookieService.set('accessToken', accessToken);
    this.cookieService.set('refreshToken', refreshToken);
  }

  getToken(): string {
    return this.cookieService.get('accessToken');
  }

  isLoggedIn(): boolean {
    const accessToken: string = this.getToken();
    return !!accessToken;
  }

  logout() {
    this.cookieService.delete('accessToken');
    this.cookieService.delete('refreshToken');
  }

  constructor(private authApiService: AuthApiService, private cookieService: CookieService) { }
}
