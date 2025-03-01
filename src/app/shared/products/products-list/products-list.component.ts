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

  wishlist = this.products;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products'] && this.products) {
      this.wishlist = [...this.products.slice(0,3)];
    }
  }
}
