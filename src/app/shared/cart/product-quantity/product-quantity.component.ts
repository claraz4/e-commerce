import {Component, inject, Input} from '@angular/core';
import {CartService} from '../../../features/cart/services/cart.service';

@Component({
  selector: 'app-product-quantity',
  imports: [],
  templateUrl: './product-quantity.component.html',
  styleUrl: './product-quantity.component.scss'
})
export class ProductQuantityComponent {
  @Input() quantity: number = 1;
  @Input() id: number = 0;

  cartService = inject(CartService);
}
