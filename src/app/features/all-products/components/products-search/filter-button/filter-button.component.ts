import {Component, inject, Input} from '@angular/core';
import {MatFormField, MatOption, MatSelect, MatLabel} from '@angular/material/select';
import {CategoriesService} from '../../../../home/components/categories/services/categories.service';
import {FormsModule} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';
import {ProductsService} from '../../../services/products.service';

@Component({
  selector: 'app-filter-button',
  imports: [
    MatSelect,
    MatFormField,
    MatOption,
    MatLabel,
    FormsModule
  ],
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.scss'
})
export class FilterButtonComponent {
  @Input() handleSettingsChange?: () => void;
  categories: string[] = [];

  protected categoriesService = inject(CategoriesService);
  private destroy$ = new Subject<void>();

  handleCategoryChange(event: any) {
    this.categoriesService.categorySelected.set(event.value);

    if (this.handleSettingsChange) {
      this.handleSettingsChange();
    }
  }

  constructor() {
    this.categoriesService.getCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe(categories => {
        this.categories = categories.map(category => category.name);
      });
  }
}
