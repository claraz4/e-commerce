import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-pagination',
  imports: [
    NgClass
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  isFirstPage: boolean = true;
  isLastPage: boolean = true;

  ngOnInit() {
    this.isLastPage = this.currentPage === this.totalPages;
    this.isFirstPage = this.currentPage === 1;
  }

  // Clicking the back arrow
  handlePrevClick() {
    if (this.currentPage === 1) {
      this.isFirstPage = true;
    } else {
      this.currentPage--;
      this.isFirstPage = this.currentPage === 1;
    }
  }

  // Clicking the next arrow
  handleNextClick() {
    if (this.currentPage === this.totalPages) {
      this.isLastPage = true;
    } else {
      this.currentPage++;
      this.isLastPage = this.currentPage === this.totalPages;
    }
  }
}
