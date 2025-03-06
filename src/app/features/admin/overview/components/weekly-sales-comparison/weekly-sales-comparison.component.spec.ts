import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySalesComparisonComponent } from './weekly-sales-comparison.component';

describe('WeeklySalesComparisonComponent', () => {
  let component: WeeklySalesComparisonComponent;
  let fixture: ComponentFixture<WeeklySalesComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklySalesComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklySalesComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
