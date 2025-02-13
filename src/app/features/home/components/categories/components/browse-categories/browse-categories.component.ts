import { Component } from '@angular/core';
import {categoriesIcons} from '../../assets/categoriesIcons';
import {CategoryBoxComponent} from '../category-box/category-box.component';
import {KeyValuePipe, NgForOf} from '@angular/common';
import {ButtonComponent} from '../../../../../../shared/buttons/button/button.component';

@Component({
  selector: 'app-browse-categories',
  imports: [
    CategoryBoxComponent,
    NgForOf,
    KeyValuePipe,
    ButtonComponent
  ],
  templateUrl: './browse-categories.component.html',
  styleUrl: './browse-categories.component.scss'
})
export class BrowseCategoriesComponent {
  categories: { [key: string]: string } = categoriesIcons;

  handleShowMore() {
    console.log('show more clicked');
  }
}
