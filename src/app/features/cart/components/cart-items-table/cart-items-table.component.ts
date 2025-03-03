import {Component, inject} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {IProductCartDTO} from '../../models/IProductCartDTO';
import {CartItemComponent} from '../cart-item/cart-item.component';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-cart-items-table',
  imports: [
    NgFor,
    CartItemComponent
  ],
  templateUrl: './cart-items-table.component.html',
  styleUrl: './cart-items-table.component.scss'
})
export class CartItemsTableComponent {
  private cartService = inject(CartService);

  // Get the cart products
  get cart() {
    return this.cartService.cartProducts();
  }

  // Track the items
  trackItemFn(index: number, item: IProductCartDTO) {
    return item.id;
  }
}
