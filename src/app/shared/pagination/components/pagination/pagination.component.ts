import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {PageService} from '../../services/page-service.service';

@Component({
  selector: 'app-pagination',
  imports: [
    NgClass
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() handlePageChange?: (...args: any[]) => void;
  currentPage: number = 1;
  totalPages: number = 1;
  isFirstPage: boolean = true;
  isLastPage: boolean = true;

  // Handle click on prev arrow
  handlePrevClick() {
    this.pageService.decrementCurrentPage();
    this.updatePageFlags();

    if (this.handlePageChange) {
      this.handlePageChange();
    }
  }

  // Handle click on next arrow
  handleNextClick() {
    this.pageService.incrementCurrentPage();
    this.updatePageFlags();
    if (this.handlePageChange) {
      this.handlePageChange();
    }
  }

  // Handle the change of a page number
  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.pageService.setCurrentPage(Number(target.value));
    this.updatePageFlags();

    if (this.handlePageChange) {
      this.handlePageChange();
    }
  }

  // Update the boolean states
  private updatePageFlags() {
    this.isFirstPage = this.currentPage === 1;
    this.isLastPage = this.currentPage === this.totalPages;
  }

  constructor(private pageService: PageService) {
    // Subscribe to the current and total pages
    this.pageService.currentPage$.subscribe(data => {
      this.currentPage = data;
      this.updatePageFlags();
    });

    this.pageService.totalPage$.subscribe(data => {
      this.totalPages = data;
      this.updatePageFlags();
    });

    this.updatePageFlags();
  }
}
