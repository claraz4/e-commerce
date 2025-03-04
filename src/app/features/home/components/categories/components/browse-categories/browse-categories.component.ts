import { Component } from '@angular/core';
import {categoriesIcons} from '../../assets/categoriesIcons';
import {CategoryBoxComponent} from '../category-box/category-box.component';
import {NgForOf} from '@angular/common';
import {ButtonComponent} from '../../../../../../shared/buttons/button/button.component';
import {CategoriesService} from '../../services/categories.service';
import {ICategory} from '../../models/ICategory';
import {ICategoryDTO} from '../../models/ICategoryDTO';

@Component({
  selector: 'app-browse-categories',
  imports: [
    CategoryBoxComponent,
    NgForOf,
    ButtonComponent
  ],
  templateUrl: './browse-categories.component.html',
  styleUrl: './browse-categories.component.scss'
})
export class BrowseCategoriesComponent {
  showMore: boolean = false;
  categoriesLimit: number = 8;

  allCategories: ICategory[] = [];
  categories: ICategory[] = [];

  ngOnInit(): void {
    this.getCategories();
  }

  // handleShowMore = () => {};

  // Get the categories
  getCategories() {
    this.categoriesService.getCategories()
      .subscribe({
        next: (data) => {
          this.createCategories(data);
          this.categories = [ ...this.allCategories.slice(0,this.categoriesLimit) ];
        },
        error: (error) => {
          console.error('Error fetching categories:', error);
        }
      });
  }

  // Create the categories array
  createCategories(data: ICategoryDTO[]) {
    for (let c of data) {
      let newCategory: ICategory = {
        categoryName: c.name,
        categoryIcon: categoriesIcons[c.name] || ""
      }
      this.allCategories.push(newCategory);
    }
  }

  // Handle show more/less
  handleShowMore = () => {
    this.showMore = !this.showMore;

    if (this.showMore) {
      this.categories = [ ...this.allCategories ];
    } else {
      this.categories = [ ...this.allCategories.slice(0,this.categoriesLimit) ];
    }
  }

  constructor(private categoriesService: CategoriesService) { }
}
