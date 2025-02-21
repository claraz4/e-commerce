import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product-box',
  imports: [],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.scss'
})
export class ProductBoxComponent {
  @Input() imageSrc: string = "";
  @Input() productName: string = "";
  @Input() productPrice: number = 0;
}
