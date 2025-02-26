import { Component, Input } from '@angular/core';
import {ProductInfoComponent} from '../../components/product-info/product-info.component';
import {SimilarItemsComponent} from '../../components/similar-items/similar-items.component';

@Component({
  selector: 'app-single-product-page',
  imports: [
    ProductInfoComponent,
    SimilarItemsComponent
  ],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.scss'
})
export class SingleProductPageComponent {
  @Input() id!: string;
}
