import {Component, effect, inject, Input, signal} from '@angular/core';
import {SingleProductService} from '../../services/single-product.service';
import {IProductInfoDTO} from '../../models/IProductInfoDTO';
import {IProductsDTO} from '../../../all-products/models/IProductsDTO';
import {ProductsListComponent} from '../../../../shared/products/products-list/products-list.component';
import {IProductInfo} from '../../../../shared/products/models/IProductInfo';
import {dummyWishlist} from '../../../all-products/assets/dummyWishlist';

@Component({
  selector: 'app-similar-items',
  imports: [
    ProductsListComponent
  ],
  templateUrl: './similar-items.component.html',
  styleUrl: './similar-items.component.scss'
})
export class SimilarItemsComponent {
  @Input() id: string = "";
  similarProducts = signal<IProductInfoDTO[]>([]);

  private singleProductService= inject(SingleProductService);

  ngOnInit() {
    this.singleProductService.getItemCategory(this.id).subscribe({
      next: data => {
        this.singleProductService.getSimilarItems(data.category).subscribe({
          next: data => this.similarProducts.set(data.products)
        })
      }
    })
  }
}
