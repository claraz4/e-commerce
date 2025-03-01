import {Component, Input, SimpleChanges} from '@angular/core';
import {ButtonComponent} from '../../buttons/button/button.component';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {ProductBoxComponent} from '../product-box/product-box.component';
import {IProductInfoDTO} from '../../../features/single-product/models/IProductInfoDTO';
import {IProductInfo} from '../models/IProductInfo';

@Component({
  selector: 'app-products-list',
  imports: [
    ButtonComponent,
    ProductBoxComponent,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  @Input({ required: true }) products!: IProductInfo[];
  @Input() isWishlist: boolean = false;
  @Input() title: string = "";

  startIndex: number = 0;
  elements: number = 3;

  // Handle arrow clicks
  handlePrevClick() {
    if (this.startIndex !== 0) {
      this.startIndex--;
    }
  }

  handleNextClick() {
    if (this.startIndex + this.elements !== this.products.length) {
      this.startIndex++;
    }
  }
}
