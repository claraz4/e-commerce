import { Component } from '@angular/core';
import {BenefitBoxComponent} from '../benefit-box/benefit-box.component';
import {benefitsSections} from '../../assets/benefitsSections';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-benefits-component',
  imports: [
    BenefitBoxComponent,
    NgForOf
  ],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {

  protected readonly benefitsSections = benefitsSections;
}
