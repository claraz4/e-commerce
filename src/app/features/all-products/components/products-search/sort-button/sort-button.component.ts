import {Component, inject, Input} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {SortService} from '../../../services/sort.service';

@Component({
  selector: 'app-sort-button',
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './sort-button.component.html',
  styleUrl: './sort-button.component.scss'
})
export class SortButtonComponent {
  @Input() handleSettingsChange?: () => void;

  private sortService = inject(SortService);

  showIsSorted: boolean = false;

  // Getters for the signals
  get isSorted() {
    return this.sortService.isSorted();
  }

  get sortedAttribute() {
    return this.sortService.sortedAttribute();
  }

  get sortedOrder() {
    return this.sortService.sortedOrder();
  }

  // Click on the sorted button
  handleSortedClick() {
    this.showIsSorted = !this.showIsSorted;
  }

  // Toggle the state of the sorting
  handleNameClick() {
    if (this.isSorted && this.sortedAttribute === "title") {
      // it was already sorted by title, remove the sorting
      console.log(this.isSorted);
      this.resetSorting();
    } else if (this.isSorted && this.sortedAttribute === "price") {
      // it was sorted by price
      this.sortService.setSortedAttribute("title");

      if (this.handleSettingsChange) {
        this.handleSettingsChange();
      }
    } else {
      // it was not sorted
      this.setSorting("title");
    }
  }

  // Toggle the order of the sorting
  handleSortOrderClick() {
    if (this.sortedOrder === "asc") {
      this.sortService.setSortedOrder("desc");

      if (this.handleSettingsChange) {
        this.handleSettingsChange();
      }
    } else if (this.sortedOrder === "desc") {
      this.sortService.setSortedOrder("asc");

      if (this.handleSettingsChange) {
        this.handleSettingsChange();
      }
    }
  }

  handlePriceClick() {
    if (this.isSorted && this.sortedAttribute === "price") {
      // it was already sorted by price, remove the sorting
      this.resetSorting();
    } else if (this.isSorted && this.sortedAttribute === "price") {
      // it was sorted by price
      this.sortService.setSortedAttribute("price");

      if (this.handleSettingsChange) {
        this.handleSettingsChange();
      }
    } else {
      // it was not sorted
      this.setSorting("price");
    }
  }

  // Remove sorting
  resetSorting() {
    this.sortService.setIsSorted(false);
    this.sortService.setSortedAttribute("");
    this.sortService.setSortedOrder("");

    if (this.handleSettingsChange) {
      this.handleSettingsChange();
    }
  }

  // Add sorting depending on the attribute
  setSorting(sortedAttribute: string) {
    this.sortService.setIsSorted(true);
    this.sortService.setSortedAttribute(sortedAttribute);
    this.sortService.setSortedOrder("asc");

    if (this.handleSettingsChange) {
      this.handleSettingsChange();
    }
  }
}
