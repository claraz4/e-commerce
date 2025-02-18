import { Component } from '@angular/core';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {IUserLogInForm} from '../../models/IUserLogInForm';
import {IUserLogInResponse} from '../../models/IUserLogInResponse';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: '../authentication.component.scss'
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.signInForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handleLogin() {
    const newForm: IUserLogInForm = this.signInForm.value;
    this.authService.storeToken(newForm);
  }
}
