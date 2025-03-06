import { Component } from '@angular/core';
import {
  WeeklySalesComparisonComponent
} from '../../components/weekly-sales-comparison/weekly-sales-comparison.component';
import {CustomersPieComponent} from '../../components/customers-pie/customers-pie.component';

@Component({
  selector: 'app-overview-page',
  imports: [
    WeeklySalesComparisonComponent,
    CustomersPieComponent
  ],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.scss'
})
export class OverviewPageComponent {

}
