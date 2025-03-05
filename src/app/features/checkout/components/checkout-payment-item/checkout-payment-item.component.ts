import {Component, Input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-checkout-payment-item',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './checkout-payment-item.component.html',
  styleUrl: './checkout-payment-item.component.scss'
})
export class CheckoutPaymentItemComponent {
  @Input() img: string = "";
  @Input() title: string = "";
  @Input() quantity: number = 0;
  @Input() total: number = 0;
}
