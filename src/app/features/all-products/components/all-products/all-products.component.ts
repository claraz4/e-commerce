import { Component } from '@angular/core';
import {ProductsSearchBarComponent} from '../products-search/products-search-bar/products-search-bar.component';

@Component({
  selector: 'app-all-products',
  imports: [
    ProductsSearchBarComponent
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {

}
