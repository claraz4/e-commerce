import {ChangeDetectorRef, Component, inject, Input} from '@angular/core';
import {SingleProductService} from '../../services/single-product.service';
import {IProductInfoDTO} from '../../models/IProductInfoDTO';
import {CurrencyPipe, NgIf} from '@angular/common';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';
import {RatingComponent} from '../../../../shared/single-product/rating/rating.component';
import {CartService} from '../../../cart/services/cart.service';
import {ProductQuantityComponent} from '../../../../shared/cart/product-quantity/product-quantity.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-info',
  imports: [
    CurrencyPipe,
    NgIf,
    ButtonComponent,
    RatingComponent,
    ProductQuantityComponent
  ],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {
  @Input() id: string = "";
  productInfo!: IProductInfoDTO;

  private singleProductService = inject(SingleProductService);
  protected cartService = inject(CartService);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef); // Inject ChangeDetectorRef

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.fetchProduct(id);
      }
    });
  }

  private fetchProduct(id: string) {
    this.singleProductService.getSingleProduct(id).subscribe({
      next: productInfo => {
        this.productInfo = productInfo;
        this.cdr.detectChanges();
      }
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

  protected readonly Number = Number;
}
