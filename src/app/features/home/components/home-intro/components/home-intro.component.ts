import { Component } from '@angular/core';
import {ButtonComponent} from '../../../../../shared/buttons/button/button.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home-intro',
  imports: [
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.scss'
})
export class HomeIntroComponent {

}
