import { Component } from '@angular/core';
import {CheckoutPersonalInfoComponent} from '../../components/checkout-personal-info/checkout-personal-info.component';

@Component({
  selector: 'app-checkout-page',
  imports: [
    CheckoutPersonalInfoComponent
  ],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent {

}
