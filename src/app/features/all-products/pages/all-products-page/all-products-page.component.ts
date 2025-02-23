import { Component } from '@angular/core';
import {WishListComponent} from '../../components/wish-list/wish-list.component';
import {
  ProductsSearchBarComponent
} from '../../components/products-search/products-search-bar/products-search-bar.component';
import {ProductsService} from '../../services/products.service';
import {IProductsDTO} from '../../models/IProductsDTO';

@Component({
  selector: 'app-all-products-page',
  imports: [
    WishListComponent,
    ProductsSearchBarComponent
  ],
  templateUrl: './all-products-page.component.html',
  styleUrl: './all-products-page.component.scss'
})
export class AllProductsPageComponent {
  allProducts?: IProductsDTO[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    // Get all the products
    this.productsService.getAllProducts().subscribe({
      next: data => { this.allProducts = data }
    })
  }
}
