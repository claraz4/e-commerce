import {Component, inject} from '@angular/core';
import {CheckoutPersonalInfoComponent} from '../../components/checkout-personal-info/checkout-personal-info.component';
import {CheckoutPaymentComponent} from '../../components/checkout-payment/checkout-payment.component';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-checkout-page',
  imports: [
    CheckoutPersonalInfoComponent,
    CheckoutPaymentComponent
  ],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent {
  private cartService = inject(CartService);

  constructor() {
    this.cartService.getUserCart().subscribe();
  }
}
