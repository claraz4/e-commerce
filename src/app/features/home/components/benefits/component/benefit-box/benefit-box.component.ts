import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-benefit-box',
  imports: [],
  templateUrl: './benefit-box.component.html',
  styleUrl: './benefit-box.component.scss'
})
export class BenefitBoxComponent {
  @Input() benefitTitle: string = "";
  @Input() benefitDescription: string = "";
  @Input() benefitIcon: string = "";

  benefitIconSafeHtml: SafeHtml = {};
  ngOnInit() {
    this.benefitIconSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.benefitIcon);
  }

  constructor(private sanitizer: DomSanitizer) {}
}
