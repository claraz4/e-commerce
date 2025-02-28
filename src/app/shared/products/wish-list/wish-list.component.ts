import { Component } from '@angular/core';
import {ButtonComponent} from '../../buttons/button/button.component';
import {NgForOf, NgStyle} from '@angular/common';
import {dummyWishlist} from '../../../features/all-products/assets/dummyWishlist';
import {ProductBoxComponent} from '../product-box/product-box.component';

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
