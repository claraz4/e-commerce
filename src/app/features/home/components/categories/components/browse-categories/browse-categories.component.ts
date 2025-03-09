import {Component, inject} from '@angular/core';
import {categoriesIcons} from '../../assets/categoriesIcons';
import {CategoryBoxComponent} from '../category-box/category-box.component';
import {NgForOf, NgIf} from '@angular/common';
import {ButtonComponent} from '../../../../../../shared/buttons/button/button.component';
import {CategoriesService} from '../../services/categories.service';
import {ICategory} from '../../models/ICategory';
import {ICategoryDTO} from '../../models/ICategoryDTO';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-browse-categories',
  imports: [
    CategoryBoxComponent,
    NgForOf,
    ButtonComponent,
    NgIf
  ],
  templateUrl: './browse-categories.component.html',
  styleUrl: './browse-categories.component.scss'
})
export class BrowseCategoriesComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private categoriesService = inject(CategoriesService);

  isTablet: boolean = false;

  showMore: boolean = false;
  categoriesLimit: number = 8;

  allCategories: ICategory[] = [];
  categories: ICategory[] = [];

  ngOnInit(): void {
    this.getCategories();
  }

  // Get the categories
  getCategories() {
    this.categoriesService.getCategories()
      .subscribe({
        next: (data) => {
          this.createCategories(data);
          if (this.isTablet) {
            this.categories = [ ...this.allCategories ];
          } else {
            this.categories = [ ...this.allCategories.slice(0,this.categoriesLimit) ];
          }
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

  constructor() {
    this.breakpointObserver.observe(['(max-width: 767px)'])
      .subscribe(result => this.isTablet = result.matches);
  }
}
