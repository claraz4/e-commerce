import { Component } from '@angular/core';
import {ProductsSearchBarComponent} from '../products-search/products-search-bar/products-search-bar.component';
import {IProductsDTO} from '../../models/IProductsDTO';
import {ProductsService} from '../../services/products.service';
import {ProductBoxComponent} from '../../../../shared/products/product-box/product-box.component';
import {NgForOf} from '@angular/common';
import {IProductInfoDTO} from '../../models/IProductInfoDTO';
import {PaginationComponent} from "../../../../shared/pagination/components/pagination/pagination.component";

@Component({
  selector: 'app-all-products',
    imports: [
        ProductsSearchBarComponent,
        ProductBoxComponent,
        NgForOf,
        PaginationComponent
    ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
  allProducts?: IProductInfoDTO[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    // Get all the products
    this.productsService.getAllProducts().subscribe({
      next: data => {
        this.allProducts = data.products;
      }
    })
  }
}
