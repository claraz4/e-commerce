import { Component } from '@angular/core';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';
import {NgForOf, NgStyle} from '@angular/common';
import {dummyWishlist} from '../../assets/dummyWishlist';
import {ProductBoxComponent} from '../../../../shared/products/product-box/product-box.component';

@Component({
  selector: 'app-wish-list',
  imports: [
    ButtonComponent,
    ProductBoxComponent,
    NgForOf
  ],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {
  wishlist = dummyWishlist.slice(0,3);
}
