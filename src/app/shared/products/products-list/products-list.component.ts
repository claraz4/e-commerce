import {Component, inject, Input, SimpleChanges} from '@angular/core';
import {ButtonComponent} from '../../buttons/button/button.component';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {ProductBoxComponent} from '../product-box/product-box.component';
import {IProductInfoDTO} from '../../../features/single-product/models/IProductInfoDTO';
import {IProductInfo} from '../models/IProductInfo';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-products-list',
  imports: [
    ButtonComponent,
    ProductBoxComponent,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  private breakpointObserver = inject(BreakpointObserver);

  @Input({ required: true }) products!: IProductInfo[];
  @Input() isWishlist: boolean = false;
  @Input() title: string = "";

  startIndex: number = 0;
  elements: number = 3;

  constructor() {
    this.breakpointObserver.observe(['(max-width: 1024px)'])
      .subscribe(result => {
        if (result.matches) {
          this.elements = 2;
        }
      });
  }

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 750px)'])
      .subscribe(result => {
        if (result.matches) {
          this.elements = this.products.length;
        }
      });
  }

  // Handle arrow clicks
  handlePrevClick() {
    if (this.startIndex !== 0) {
      this.startIndex--;
    }
  }

  handleNextClick() {
    if (this.startIndex + this.elements !== this.products.length) {
      this.startIndex++;
    }
  }
}
