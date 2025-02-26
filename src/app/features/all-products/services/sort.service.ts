import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  private isSortedSubject = new BehaviorSubject<boolean>(false);
  private sortedOrderSubject = new BehaviorSubject<string>("asc");
  private sortedAttributeSubject = new BehaviorSubject<string>("title");
  isSorted$ = this.isSortedSubject.asObservable();
  sortedOrder$ = this.sortedOrderSubject.asObservable();
  sortedAttribute$ = this.sortedAttributeSubject.asObservable();

  setIsSorted(isSorted: boolean) {
    this.isSortedSubject.next(isSorted);
  }

  setSortedOrder(sortedOrder: string) {
    this.sortedOrderSubject.next(sortedOrder);
  }

  setSortedAttribute(sortedAttribute: string) {
    this.sortedAttributeSubject.next(sortedAttribute);
  }

  constructor() { }
}
