import {Component, Input} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product-box',
  imports: [
    NgClass
  ],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.scss'
})
export class ProductBoxComponent {
  @Input() imageSrc: string = "";
  @Input() productName: string = "";
  @Input() productPrice: number = 0;
  @Input() isWhiteBg: boolean = false;
}
