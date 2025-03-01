import { Component } from '@angular/core';
import {ProductsListComponent} from '../../../../shared/products/products-list/products-list.component';
import {AllProductsComponent} from '../../components/all-products/all-products.component';
import {dummyWishlist} from '../../assets/dummyWishlist';

@Component({
  selector: 'app-all-products-page',
  imports: [
    ProductsListComponent,
    AllProductsComponent
  ],
  templateUrl: './all-products-page.component.html',
  styleUrl: './all-products-page.component.scss'
})
export class AllProductsPageComponent {

  protected readonly dummyWishlist = dummyWishlist;
}
