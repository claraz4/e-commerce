import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  isSorted = signal<boolean>(false);
  sortedOrder = signal<string>("asc");
  sortedAttribute = signal<string>("title");

  setIsSorted(isSorted: boolean) {
    this.isSorted.set(isSorted);
  }

  setSortedOrder(sortedOrder: string) {
    this.sortedOrder.set(sortedOrder);
  }

  setSortedAttribute(sortedAttribute: string) {
    this.sortedAttribute.set(sortedAttribute);
  }

  constructor() { }
}
