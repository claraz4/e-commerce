import { Component } from '@angular/core';
import {FinancialSummaryBoxComponent} from '../financial-summary-box/financial-summary-box.component';
import {NgForOf} from '@angular/common';
import {financialSummaryData} from '../../../../assets/financialSummaryData';

@Component({
  selector: 'app-financial-summary',
  imports: [
    FinancialSummaryBoxComponent,
    NgForOf
  ],
  templateUrl: './financial-summary.component.html',
  styleUrl: './financial-summary.component.scss'
})
export class FinancialSummaryComponent {

  protected readonly financialSummaryData = financialSummaryData;
}
