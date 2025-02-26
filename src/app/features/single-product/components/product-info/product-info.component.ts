import {Component, Input} from '@angular/core';
import {SingleProductService} from '../../services/single-product.service';
import {IProductInfoDTO} from '../../models/IProductInfoDTO';
import {CurrencyPipe, NgIf} from '@angular/common';
import {ButtonComponent} from '../../../../shared/buttons/button/button.component';
import {RatingComponent} from '../../../../shared/single-product/rating/rating.component';

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
  productInfo?: IProductInfoDTO;

  constructor(private singleProductService: SingleProductService) { }

  ngOnInit() {
    this.singleProductService.getSingleProduct(this.id).subscribe(productInfo => {
      this.productInfo = productInfo;
      console.log(productInfo);
    });
  }
}
