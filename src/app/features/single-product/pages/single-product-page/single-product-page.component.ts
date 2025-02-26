import { Component, Input } from '@angular/core';
import {ProductInfoComponent} from '../../components/product-info/product-info.component';

@Component({
  selector: 'app-single-product-page',
  imports: [
    ProductInfoComponent
  ],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.scss'
})
export class SingleProductPageComponent {
  @Input() id!: string;
}
