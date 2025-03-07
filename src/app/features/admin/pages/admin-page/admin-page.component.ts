import { Component } from '@angular/core';
import {OverviewPageComponent} from '../../components/overview/overview-page/overview-page.component';
import {AdminProductsView} from '../../components/products/admin-products-view/admin-products-view';

@Component({
  selector: 'app-admin-page',
  imports: [
    OverviewPageComponent,
    AdminProductsView
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

}
