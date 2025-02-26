import { Component } from '@angular/core';
import {ProductsSearchBarComponent} from '../products-search/products-search-bar/products-search-bar.component';
import {ProductsService} from '../../services/products.service';
import {ProductBoxComponent} from '../../../../shared/products/product-box/product-box.component';
import {NgForOf, NgIf} from '@angular/common';
import {IProductInfoDTO} from '../../../single-product/models/IProductInfoDTO';
import {PaginationComponent} from "../../../../shared/pagination/components/pagination/pagination.component";
import {PageService} from '../../../../shared/pagination/services/page-service.service';

@Component({
  selector: 'app-all-products',
  imports: [
    ProductsSearchBarComponent,
    ProductBoxComponent,
    NgForOf,
    PaginationComponent,
    NgIf
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
  allProducts?: IProductInfoDTO[];
  currentPage: number = 1;
  totalPages: number = 1;
  limitPerPage: number = 15;

  constructor(private productsService: ProductsService, private pageService: PageService) {
    // Subscribe to the current and total pages
    this.pageService.currentPage$.subscribe(data => this.currentPage = data);
    this.pageService.totalPage$.subscribe(data => this.totalPages = data);

    // Get all the products
    this.productsService.getAllProducts(this.limitPerPage, 0).subscribe({
      next: data => {
        this.allProducts = data.products;

        // Set the total pages
        this.pageService.setTotalPages(Math.ceil(data.total / this.limitPerPage));
      }
    });
  }

  // Handle change in settings
  handleSettingsChange = (): void => {
    this.pageService.setCurrentPage(1);

    this.productsService.getAllProducts(this.limitPerPage, 0).subscribe({
      next: data => {
        this.allProducts = data.products;
        this.pageService.setTotalPages(Math.ceil(data.total / this.limitPerPage));
      }
    });
  };

  // Handle the change of the page
  handlePageChange = (): void => {
    this.productsService.getAllProducts(this.limitPerPage, (this.currentPage - 1) * this.limitPerPage).subscribe({
      next: data => {
        this.allProducts = data.products;
        this.pageService.setTotalPages(Math.ceil(data.total / this.limitPerPage));
      }
    })
  }
}
