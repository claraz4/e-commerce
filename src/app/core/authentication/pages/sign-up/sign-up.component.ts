import { Component } from '@angular/core';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {passwordValidator} from '../../validators/password-validator';
import {confirmPasswordValidator} from '../../validators/confirm-password-validator';

@Component({
  selector: 'app-sign-up',
  imports: [
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: '../authentication.component.scss'
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = formBuilder.group({
      email: ['', Validators.required],
      phone: [''],
      password: ['', [Validators.required, passwordValidator()]],
      confirmPassword: ['']
    })
  }

  // Add the validators of the confirm password
  ngOnInit() {
    this.signUpForm.get('confirmPassword')?.setValidators([
      Validators.required,
      confirmPasswordValidator(this.signUpForm.get('password')!)
    ]);
  }

  // this.signUpForm.get('password')?.errors); to access errors from the form
}
