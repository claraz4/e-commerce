import { Injectable } from '@angular/core';
import {AuthApiService} from './auth-api.service';
import {IUserLogInForm} from '../models/IUserLogInForm';
import {CookieService} from 'ngx-cookie-service';
import {IUserLogInResponse} from '../models/IUserLogInResponse';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storeToken(accessToken: string, refreshToken: string) {
    this.cookieService.set('accessToken', accessToken);
    this.cookieService.set('refreshToken', refreshToken);
  }

  getAccessToken(): string {
    return this.cookieService.get('accessToken');
  }

  getRefreshToken(): string {
    return this.cookieService.get('refreshToken');
  }

  isLoggedIn(): boolean {
    const accessToken: string = this.getAccessToken();
    return !!accessToken;
  }

  logout() {
    this.cookieService.delete('accessToken');
    this.cookieService.delete('refreshToken');
  }

  refreshToken() {
    return this.http.post<String>(`${environment.authUrl}/auth/refresh`, {
      refreshToken: this.getRefreshToken()
    });
  }

  constructor(private authApiService: AuthApiService, private cookieService: CookieService, private http: HttpClient) { }
}
