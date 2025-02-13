import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-category-box',
  imports: [],
  templateUrl: './category-box.component.html',
  styleUrl: './category-box.component.scss'
})
export class CategoryBoxComponent {
  @Input() categoryName: string = "";
  @Input() categoryIcon: string = "";

  // This is needed because I am working with svgs and Angular blocks them from being rendered as innerHtml
  categoryIconSafeHtml: SafeHtml = {};
  ngOnInit() {
    this.categoryIconSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.categoryIcon);
  }

  constructor(private sanitizer: DomSanitizer) {}
}
