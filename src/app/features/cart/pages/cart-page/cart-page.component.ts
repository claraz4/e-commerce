import {Component, inject} from '@angular/core';
import {CartItemsTableComponent} from '../../components/cart-items-table/cart-items-table.component';

@Component({
  selector: 'app-cart-page',
  imports: [
    CartItemsTableComponent
  ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

}
