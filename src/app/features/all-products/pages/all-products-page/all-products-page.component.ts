import { Component } from '@angular/core';
import {WishListComponent} from '../../../../shared/products/wish-list/wish-list.component';
import {AllProductsComponent} from '../../components/all-products/all-products.component';

@Component({
  selector: 'app-all-products-page',
  imports: [
    WishListComponent,
    AllProductsComponent
  ],
  templateUrl: './all-products-page.component.html',
  styleUrl: './all-products-page.component.scss'
})
export class AllProductsPageComponent {

}
