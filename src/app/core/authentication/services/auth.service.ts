import { Injectable } from '@angular/core';
import {AuthApiService} from './auth-api.service';
import {IUserLogInForm} from '../models/IUserLogInForm';
import {CookieService} from 'ngx-cookie-service';
import {IUserLogInResponse} from '../models/IUserLogInResponse';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {IRefreshTokenDTO} from '../models/IRefreshTokenDTO';
import {Router} from '@angular/router';

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
    this.router.navigate(['/']).then(() => {});
  }

  refreshToken() {
    return this.http.post<IRefreshTokenDTO>(`${environment.authUrl}/auth/refresh`, {
      refreshToken: this.getRefreshToken()
    });
  }

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router
  ) { }
}
