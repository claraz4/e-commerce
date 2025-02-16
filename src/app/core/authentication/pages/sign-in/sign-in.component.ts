import { Component } from '@angular/core';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';

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

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = formBuilder.group({
      credential: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
}
