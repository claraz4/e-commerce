import {Component, inject} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {ICartInfoDTO} from '../../models/ICartInfoDTO';

@Component({
  selector: 'app-cart-total',
  imports: [],
  templateUrl: './cart-total.component.html',
  styleUrl: './cart-total.component.scss'
})
export class CartTotalComponent {
  private cartService = inject(CartService);

  cartInfo?: ICartInfoDTO;

  constructor() {
    this.cartService.getUserCart().subscribe({
      next: data => this.cartInfo = data.carts[0]
    })
  }
}
