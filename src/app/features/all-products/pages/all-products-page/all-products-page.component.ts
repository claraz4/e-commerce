import { Component } from '@angular/core';
import {WishListComponent} from '../../components/wish-list/wish-list.component';

@Component({
  selector: 'app-all-products-page',
  imports: [
    WishListComponent
  ],
  templateUrl: './all-products-page.component.html',
  styleUrl: './all-products-page.component.scss'
})
export class AllProductsPageComponent {

}
