import { Component } from '@angular/core';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {IUserLogInForm} from '../../models/IUserLogInForm';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {AuthApiService} from '../../services/auth-api.service';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-sign-in',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: '../authentication.component.scss'
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private authApiService: AuthApiService
  ) {
    this.signInForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  error: string = "";

  handleLogin() {
    const newForm: IUserLogInForm = this.signInForm.value;
    this.authApiService.login(newForm).subscribe({
      next: (data) => {
        this.authService.storeToken(data.accessToken, data.refreshToken);
        this.router.navigate(['/']).then(r => {});
      },
      error: err => this.error = "Invalid username of password"
    });
  }
}
