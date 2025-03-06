import { Component } from '@angular/core';
import {AdminProductsView} from '../../components/admin-products-view/admin-products-view';

@Component({
  selector: 'app-admin-products-page',
  imports: [
    AdminProductsView
  ],
  templateUrl: './admin-products-page.component.html',
  styleUrl: './admin-products-page.component.scss'
})
export class AdminProductsPageComponent {

}
