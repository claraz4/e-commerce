import { Component } from '@angular/core';
import {FilterButtonComponent} from '../filter-button/filter-button.component';
import {ProductsSearchComponent} from '../products-search/products-search.component';
import {SortButtonComponent} from '../sort-button/sort-button.component';

@Component({
  selector: 'app-products-search-bar',
  imports: [
    FilterButtonComponent,
    ProductsSearchComponent,
    SortButtonComponent
  ],
  templateUrl: './products-search-bar.component.html',
  styleUrl: './products-search-bar.component.scss'
})
export class ProductsSearchBarComponent {

}
