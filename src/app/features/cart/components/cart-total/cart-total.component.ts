import {Component, inject} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CurrencyPipe} from '@angular/common';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';

@Component({
  selector: 'app-cart-total',
  imports: [
    CurrencyPipe,
    ButtonComponent
  ],
  templateUrl: './cart-total.component.html',
  styleUrl: './cart-total.component.scss'
})
export class CartTotalComponent {
  private cartService = inject(CartService);
  shippingFee: number = 5;

  get total() {
    return this.cartService.total();
  }
}
