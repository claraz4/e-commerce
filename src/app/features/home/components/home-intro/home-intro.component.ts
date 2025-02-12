import { Component } from '@angular/core';
import {LargeButtonComponent} from '../../../../shared/buttons/large-button/large-button.component';

@Component({
  selector: 'app-home-intro',
  imports: [
    LargeButtonComponent
  ],
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.scss'
})
export class HomeIntroComponent {
  handleShopClick(): void {
    console.log("from parent");
  }
}
