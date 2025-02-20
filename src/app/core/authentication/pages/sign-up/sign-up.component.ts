import {ChangeDetectorRef, Component} from '@angular/core';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import {passwordValidator} from '../../validators/password-validator';
import {confirmPasswordValidator} from '../../validators/confirm-password-validator';
import {IUserSignUpForm} from '../../models/IUserSignUpForm';
import {getFormValidationErrors} from '../../../../shared/utils/get-form-validation-errors';
import {AuthApiService} from '../../services/auth-api.service';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: '../authentication.component.scss'
})
export class SignUpComponent {
  signUpForm: FormGroup;
  errors: { [key: string] : string } = {};

  constructor(private formBuilder: FormBuilder, private authApiService: AuthApiService, private valueChanged: ChangeDetectorRef) {
    this.signUpForm = formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, passwordValidator()]],
      confirmPassword: ['']
    });

    // Detect a change in the form
    this.signUpForm.valueChanges.subscribe({
      next: () => {
        this.errors = {}; // reset errors when the user edits the form again
      }
    })
  }

  // Add the validators of the confirm password
  ngOnInit() {
    this.signUpForm.get('confirmPassword')?.setValidators([
      Validators.required,
      confirmPasswordValidator(this.signUpForm.get('password')!)
    ]);
  }

  // Submit the form
  signUp(): void {
    this.errors = getFormValidationErrors(this.signUpForm);

    if (this.signUpForm.valid) {
      // edit the form and remove the confirm password field
      const newForm: IUserSignUpForm = {
        username: this.signUpForm.value.username,
        email: this.signUpForm.value.email,
        firstName: this.signUpForm.value.firstName,
        lastName: this.signUpForm.value.lastName,
        password: this.signUpForm.value.password
      }

      // send the POST request (it doesn't show in the network tab because it's not a real database add)
      this.authApiService.signup(newForm).subscribe({
        next: data => console.log(data) // just to show that the sign up was successful (can be deleted later)
      });
    }
  }
}
