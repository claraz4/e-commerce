import { Component } from '@angular/core';
import {HomeIntroComponent} from '../../components/home-intro/home-intro.component';
import {BrowseCategoriesComponent} from '../../components/categories/components/browse-categories/browse-categories.component';
import {BenefitsComponent} from '../../components/benefits/component/benefits-component/benefits.component';

@Component({
  selector: 'app-home',
  imports: [
    HomeIntroComponent,
    BrowseCategoriesComponent,
    BenefitsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
