import { Component } from '@angular/core';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import {passwordValidator} from '../../validators/password-validator';
import {confirmPasswordValidator} from '../../validators/confirm-password-validator';
import {NgClass} from '@angular/common';
import {getFormValidationErrors} from '../../../../shared/utils/get-form-validation-errors';

@Component({
  selector: 'app-sign-up',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: '../authentication.component.scss'
})
export class SignUpComponent {
  signUpForm: FormGroup;
  errors: {} = {};

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

  handleClick() {
    console.log("hi");
    console.log(this.signUpForm.value);
  }

  // Submit the form
  signUp(): void {
    this.errors = getFormValidationErrors(this.signUpForm);

    if (this.signUpForm.valid) {
      console.log('Form valid! The details are: ');
      console.log(this.signUpForm.value);
    } else {

    }
  }

  // this.signUpForm.get('password')?.errors); to access errors from the form
}
