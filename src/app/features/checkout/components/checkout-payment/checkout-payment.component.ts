import {Component, inject} from '@angular/core';
import {CartService} from '../../../cart/services/cart.service';
import {CheckoutPaymentItemComponent} from '../checkout-payment-item/checkout-payment-item.component';
import {CurrencyPipe, NgForOf} from '@angular/common';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';

@Component({
  selector: 'app-checkout-payment',
  imports: [
    CheckoutPaymentItemComponent,
    NgForOf,
    CurrencyPipe,
    ButtonComponent
  ],
  templateUrl: './checkout-payment.component.html',
  styleUrl: './checkout-payment.component.scss'
})
export class CheckoutPaymentComponent {
  private cartService = inject(CartService);
  shippingFee: number = 5;

  // Get cart products and total
  get cartProducts() {
    return this.cartService.cartProducts();
  }

  get total() {
    return this.cartService.total();
  }
}
