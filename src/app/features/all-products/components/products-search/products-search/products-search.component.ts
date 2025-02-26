import { Component } from '@angular/core';
import {SearchService} from '../../../services/search.service';

@Component({
  selector: 'app-products-search',
  imports: [],
  templateUrl: './products-search.component.html',
  styleUrl: './products-search.component.scss'
})
export class ProductsSearchComponent {
  search: string = "";

  constructor(private searchService: SearchService) {
    this.searchService.search$.subscribe(search => this.search = search);
  }

  handleEnterInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchService.setSearch(target.value);
  }
}
