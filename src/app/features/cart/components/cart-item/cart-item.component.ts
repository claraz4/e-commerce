import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {ProductQuantityComponent} from '../../../../shared/cart/product-quantity/product-quantity.component';

@Component({
  selector: 'app-cart-item',
  imports: [
    CurrencyPipe,
    RouterLink,
    ProductQuantityComponent
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() id: number = 0;
  @Input() item: string = "";
  @Input() img: string = "";
  @Input() price: number = 0;
  @Input() quantity: number = 0;
  @Input() total: number = 0;

  cartService = inject(CartService);
}
