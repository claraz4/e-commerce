import {Component, inject, Input, signal} from '@angular/core';
import {CartService} from '../../../features/cart/services/cart.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-product-quantity',
  imports: [
    NgClass
  ],
  templateUrl: './product-quantity.component.html',
  styleUrl: './product-quantity.component.scss'
})
export class ProductQuantityComponent {
   protected cartService = inject(CartService);

   @Input() id: number = 0;
   @Input() isBig: boolean = false;

   get quantity() {
     return this.cartService.getProductQuantity(this.id);
   }

}
