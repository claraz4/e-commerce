import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private currentPageSubject = new BehaviorSubject<number>(1);
  private totalPageSubject = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPageSubject.asObservable();
  totalPage$ = this.totalPageSubject.asObservable();

  incrementCurrentPage() {
    const currentVal: number = this.currentPageSubject.getValue();

    // If we still haven't reached the last page, increment the current page
    if (currentVal !== this.totalPageSubject.getValue()) {
      this.currentPageSubject.next(currentVal + 1);
    }
  }

  decrementCurrentPage() {
    const currentVal: number = this.currentPageSubject.getValue();

    // If we still haven't reached the first page, decrement the current page
    if (currentVal !== 1) {
      this.currentPageSubject.next(currentVal - 1);
    }
  }

  getCurrentPage() {
    return this.currentPageSubject.getValue();
  }

  setCurrentPage(page: number) {
    this.currentPageSubject.next(page);
  }

  setTotalPages(total: number) {
    if (total >= 1) {
      this.totalPageSubject.next(total);
    }
  }
}
