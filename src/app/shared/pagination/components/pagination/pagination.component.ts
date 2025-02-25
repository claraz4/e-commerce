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
  currentPage: number = 1;
  totalPages: number = 1;
  isFirstPage: boolean = true;
  isLastPage: boolean = true;

  ngOnInit() {
    // Subscribe to the current and total pages
    this.pageService.currentPage$.subscribe(data => {
      this.currentPage = data;
    });

    this.pageService.totalPage$.subscribe(data => {
      this.totalPages = data;
    });

    this.updatePageFlags();
  }

  // Handle click on prev arrow
  handlePrevClick() {
    this.pageService.decrementCurrentPage();
    this.updatePageFlags();
  }

  // Handle click on next arrow
  handleNextClick() {
    this.pageService.incrementCurrentPage();
    this.updatePageFlags();
  }

  // Handle the change of a page number
  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.pageService.setCurrentPage(Number(target.value));
    this.updatePageFlags();
  }

  // Update the boolean states
  private updatePageFlags() {
    this.isFirstPage = this.currentPage === 1;
    this.isLastPage = this.currentPage === this.totalPages;
  }

  constructor(private pageService: PageService) { }
}
