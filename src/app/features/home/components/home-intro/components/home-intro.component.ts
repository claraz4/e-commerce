import { Component } from '@angular/core';
import {ButtonComponent} from '../../../../../shared/buttons/button/button.component';

@Component({
  selector: 'app-home-intro',
    imports: [
        ButtonComponent
    ],
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.scss'
})
export class HomeIntroComponent {
  handleShopClick(): void {
    console.log("from parent");
  }
}
