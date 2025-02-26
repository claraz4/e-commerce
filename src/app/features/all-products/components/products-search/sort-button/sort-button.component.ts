import { Component } from '@angular/core';
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
  showIsSorted: boolean = false;
  isSorted: boolean = false;
  sortedAttribute: string = "title";
  sortedOrder: string = "asc";

  // Click on the sorted button
  handleSortedClick() {
    this.showIsSorted = !this.showIsSorted;
  }

  // Toggle the state
  handleNameClick() {
    if (this.isSorted && this.sortedAttribute === "title") {
      // it was already sorted by title, remove the sorting
      this.resetSorting();
    } else if (this.isSorted && this.sortedAttribute === "price") {
      // it was sorted by price
      this.sortService.setSortedAttribute("title");
    } else {
      // it was not sorted
      this.setSorting("title");
    }
  }

  handlePriceClick() {
    if (this.isSorted && this.sortedAttribute === "price") {
      // it was already sorted by price, remove the sorting
      this.resetSorting();
    } else if (this.isSorted && this.sortedAttribute === "price") {
      // it was sorted by price
      this.sortService.setSortedAttribute("price");
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
  }

  // Add sorting depending on the attribute
  setSorting(sortedAttribute: string) {
    this.sortService.setIsSorted(true);
    this.sortService.setSortedAttribute(sortedAttribute);
    this.sortService.setSortedOrder("asc");
  }

  constructor(private sortService: SortService) {
    this.sortService.isSorted$.subscribe(data => this.isSorted = data);
    this.sortService.sortedAttribute$.subscribe(data => this.sortedAttribute = data);
    this.sortService.sortedOrder$.subscribe(data => this.sortedOrder = data);
  }
}
