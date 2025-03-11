import {Component, inject, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-category-box',
  imports: [],
  templateUrl: './category-box.component.html',
  styleUrl: './category-box.component.scss'
})
export class CategoryBoxComponent {
  @Input() categoryName: string = "";
  @Input() categoryIcon: string = "";

  private router = inject(Router);
  private categoriesService = inject(CategoriesService);

  // This is needed because I am working with svgs and Angular blocks them from being rendered as innerHtml
  categoryIconSafeHtml: SafeHtml = {};
  ngOnInit() {
    this.categoryIconSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.categoryIcon);
  }

  handleCategoryClick() {
    this.categoriesService.categorySelected.set(this.categoryName);
    this.router.navigate(['/shop']).then(r => {});
  }

  constructor(private sanitizer: DomSanitizer) {}
}
