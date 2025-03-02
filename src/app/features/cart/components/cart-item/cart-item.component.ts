import {Component, Input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() item: string = "";
  @Input() img: string = "";
  @Input() price: number = 0;
  @Input() quantity: number = 0;
  @Input() total: number = 0;
}
