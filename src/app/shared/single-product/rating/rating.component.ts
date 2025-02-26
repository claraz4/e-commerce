import {Component, Input} from '@angular/core';
import {IReviewDTO} from '../models/IReviewDTO';
import {starSVGs} from '../assets/starSVGs';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-rating',
  imports: [
    NgForOf
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input() reviews: IReviewDTO[] = [];
  averageRating: number = 0;
  totalReviews: number = 0;
  starsDisplay: ('empty' | 'half' | 'full')[] = ['empty', 'empty', 'empty', 'empty', 'empty'];

  ngOnInit(): void {
    this.totalReviews = this.reviews.length;

    if (this.totalReviews > 0) {
      this.getAverageRating();
      this.getStarArray();
    } else {
      this.averageRating = 0;
    }
  }

  // Get the average rating
  getAverageRating() {
    this.averageRating = this.reviews.reduce((sum: number, review: IReviewDTO) => {
      return sum + review.rating;
    }, 0) / this.totalReviews;
  }

  // Compute the star array
  getStarArray() {
    let copy: number = this.averageRating;

    for (let i = 0; i < 5 && copy > 0; i++) {
      if (copy >= 1) {
        this.starsDisplay[i] = 'full';
      } else if (copy < 1 && copy !== 0) {
        this.starsDisplay[i] = 'half';
      }
      copy -= 1;
    }
  }

  protected readonly starSVGs = starSVGs;
}
