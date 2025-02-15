import { Component } from '@angular/core';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';

@Component({
  selector: 'app-sign-up',
  imports: [
    ButtonComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: '../authentication.component.scss'
})
export class SignUpComponent {

}
