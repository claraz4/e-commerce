import {Component, inject, Input} from '@angular/core';
import {SingleProductService} from '../../services/single-product.service';
import {IProductInfoDTO} from '../../models/IProductInfoDTO';
import {CurrencyPipe, NgIf} from '@angular/common';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';
import {RatingComponent} from '../../../../shared/single-product/rating/rating.component';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-info',
  imports: [
    CurrencyPipe,
    NgIf,
    ButtonComponent,
    RatingComponent
  ],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {
  @Input() id: string = "";
  productInfo!: IProductInfoDTO;

  private singleProductService = inject(SingleProductService);
  private cartService = inject(CartService);

  ngOnInit() {
    this.singleProductService.getSingleProduct(this.id).subscribe(productInfo => {
      this.productInfo = productInfo;
    });
  }

  // Handle click add to cart
  handleAddToCart() {
    this.cartService.addProduct({
      id: this.productInfo.id,
      title: this.productInfo.title,
      price: this.productInfo.price,
      quantity: 1,
      total: this.productInfo.price,
      discountPercentage: this.productInfo.discountPercentage,
      discountedTotal: this.productInfo.discountPercentage,
      thumbnail: this.productInfo.thumbnail
    });
  }
}
