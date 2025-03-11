import {Component, Input} from '@angular/core';
import {ProductsSearchComponent} from '../products-search/products-search.component';
import {SortButtonComponent} from '../sort-button/sort-button.component';

@Component({
  selector: 'app-products-search-bar',
  imports: [
    ProductsSearchComponent,
    SortButtonComponent
  ],
  templateUrl: './products-search-bar.component.html',
  styleUrl: './products-search-bar.component.scss'
})
export class ProductsSearchBarComponent {
  @Input() handleSettingsChange?: () => void;
}
