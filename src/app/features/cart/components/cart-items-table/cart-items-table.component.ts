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

  cart?: IProductCartDTO[];

  constructor() {
    this.cartService.getUserCart().subscribe({
      next: data => this.cart = data.carts[0].products
    })
  }
}
