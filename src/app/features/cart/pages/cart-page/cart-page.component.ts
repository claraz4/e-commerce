import {Component, inject} from '@angular/core';
import {CartItemsTableComponent} from '../../components/cart-items-table/cart-items-table.component';
import {CartTotalComponent} from '../../components/cart-total/cart-total.component';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  imports: [
    CartItemsTableComponent,
    CartTotalComponent
  ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  cartService = inject(CartService);

  constructor() {
    this.cartService.getUserCart().subscribe();
  }
}
