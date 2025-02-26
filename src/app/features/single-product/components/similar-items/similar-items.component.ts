import {Component, Input} from '@angular/core';
import {SingleProductService} from '../../services/single-product.service';
import {IProductInfoDTO} from '../../models/IProductInfoDTO';
import {IProductsDTO} from '../../../all-products/models/IProductsDTO';

@Component({
  selector: 'app-similar-items',
  imports: [],
  templateUrl: './similar-items.component.html',
  styleUrl: './similar-items.component.scss'
})
export class SimilarItemsComponent {
  @Input() id: string = "";
  similarProducts?: IProductsDTO;

  constructor(private singleProductService: SingleProductService) { }

  ngOnInit() {
    this.singleProductService.getItemCategory(this.id).subscribe({
      next: data => {
        this.singleProductService.getSimilarItems(data.category).subscribe({
          next: data => this.similarProducts = data
        })
      }
    })
  }
}
