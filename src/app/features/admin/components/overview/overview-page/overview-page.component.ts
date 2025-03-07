import { Component } from '@angular/core';
import {
  WeeklySalesComparisonComponent
} from '../weekly-sales-comparison/weekly-sales-comparison.component';
import {CustomersPieComponent} from '../customers-pie/customers-pie.component';
import {FinancialSummaryComponent} from '../financial-summary/financial-summary/financial-summary.component';

@Component({
  selector: 'app-overview-page',
  imports: [
    WeeklySalesComparisonComponent,
    CustomersPieComponent,
    FinancialSummaryComponent
  ],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.scss'
})
export class OverviewPageComponent {

}
