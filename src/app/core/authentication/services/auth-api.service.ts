import {effect, inject, Injectable, signal, SimpleChanges} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IUserLogInResponse} from '../models/IUserLogInResponse';
import {IUserLogInForm} from '../models/IUserLogInForm';
import {IUserSignUpForm} from '../models/IUserSignUpForm';
import {IUserSignUpResponse} from '../models/IUserSignUpResponse';
import {catchError, map} from 'rxjs';
import {IUserInfoDTO} from '../models/IUserInfoDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private authUrl: string = environment.authUrl;

  private http = inject(HttpClient);

  userInfo = signal<IUserSignUpResponse | undefined>(undefined);

  login(form: IUserLogInForm) {
    return this.http.post<IUserLogInResponse>(`${this.authUrl}/auth/login`, form);
  }

  signup(form: IUserSignUpForm) {
    return this.http.post<IUserSignUpResponse>(`${this.authUrl}/users/add`, form);
  }

  getAuthUser() {
        console.log("here")
    return this.http.get<IUserInfoDTO>(`${this.authUrl}/user/me`).pipe(
      map(response => {
        this.userInfo.set(response);
        return response;
      }),
      catchError(error => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }
}
