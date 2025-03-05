import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPaymentItemComponent } from './checkout-payment-item.component';

describe('CheckoutPaymentItemComponent', () => {
  let component: CheckoutPaymentItemComponent;
  let fixture: ComponentFixture<CheckoutPaymentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutPaymentItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutPaymentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
