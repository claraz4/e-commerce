import {Component, inject, Input} from '@angular/core';
import {SearchService} from '../../../services/search.service';
import {FilterButtonComponent} from '../filter-button/filter-button.component';

@Component({
  selector: 'app-products-search',
  imports: [
    FilterButtonComponent
  ],
  templateUrl: './products-search.component.html',
  styleUrl: './products-search.component.scss'
})
export class ProductsSearchComponent {
  @Input() handleSettingsChange?: () => void;
  private searchService = inject(SearchService);

  // Getters for signals
  get search() {
    return this.searchService.search();
  }

  handleEnterInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchService.setSearch(target.value);

    if (this.handleSettingsChange) {
      this.handleSettingsChange();
    }
  }
}
