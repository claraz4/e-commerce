import {Component, inject, Input, Sanitizer} from '@angular/core';
import {CurrencyPipe, NgClass, NgIf} from '@angular/common';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-financial-summary-box',
  imports: [
    CurrencyPipe,
    NgIf,
    NgClass
  ],
  templateUrl: './financial-summary-box.component.html',
  styleUrl: './financial-summary-box.component.scss'
})
export class FinancialSummaryBoxComponent {
  @Input() summaryTitle: string = "";
  @Input() summaryDuration: number = 0;
  @Input() summaryMoney: number = 0;
  @Input() growth: number = 0;
  @Input() icon: string = "";

  private sanitizer = inject(DomSanitizer);

  iconSafeHtml: SafeHtml = {};
  ngOnInit() {
    this.iconSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.icon);
  }

  protected readonly Math = Math;
}
