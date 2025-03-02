import {Component, Input} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-box',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.scss'
})
export class ProductBoxComponent {
  @Input() productId: number = 0;
  @Input() imageSrc: string = "";
  @Input() productName: string = "";
  @Input() productPrice: number = 0;
  @Input() isWhiteBg: boolean = false;
}
