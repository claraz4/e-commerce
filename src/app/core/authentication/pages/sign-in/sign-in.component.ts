import { Component } from '@angular/core';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';

@Component({
  selector: 'app-sign-in',
  imports: [
    ButtonComponent
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: '../authentication.component.scss'
})
export class SignInComponent {

}
