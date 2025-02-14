import { Component } from '@angular/core';
import {HomeIntroComponent} from '../../components/home-intro/home-intro.component';
import {BrowseCategoriesComponent} from '../../components/categories/components/browse-categories/browse-categories.component';
import {BenefitsComponent} from '../../components/benefits/component/benefits-component/benefits.component';
import {NewArrivalsComponent} from '../../components/new-arrivals/components/new-arrivals/new-arrivals.component';

@Component({
  selector: 'app-home',
  imports: [
    HomeIntroComponent,
    BrowseCategoriesComponent,
    BenefitsComponent,
    NewArrivalsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
