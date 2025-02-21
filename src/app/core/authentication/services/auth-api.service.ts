import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IUserLogInResponse} from '../models/IUserLogInResponse';
import {IUserLogInForm} from '../models/IUserLogInForm';
import {IUserSignUpForm} from '../models/IUserSignUpForm';
import {IUserSignUpResponse} from '../models/IUserSignUpResponse';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private authUrl: string = environment.authUrl;

  login(form: IUserLogInForm) {
    return this.http.post<IUserLogInResponse>(`${this.authUrl}/auth/login`, form);
  }

  signup(form: IUserSignUpForm) {
    return this.http.post<IUserSignUpResponse>(`${this.authUrl}/users/add`, form);
  }

  constructor(private http: HttpClient) { }
}
