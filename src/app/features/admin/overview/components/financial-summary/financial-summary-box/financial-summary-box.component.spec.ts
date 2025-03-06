import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialSummaryBoxComponent } from './financial-summary-box.component';

describe('FinancialSummaryBoxComponent', () => {
  let component: FinancialSummaryBoxComponent;
  let fixture: ComponentFixture<FinancialSummaryBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialSummaryBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialSummaryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
