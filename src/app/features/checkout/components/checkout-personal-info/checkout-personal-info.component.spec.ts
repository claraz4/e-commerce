import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPersonalInfoComponent } from './checkout-personal-info.component';

describe('CheckoutPersonalInfoComponent', () => {
  let component: CheckoutPersonalInfoComponent;
  let fixture: ComponentFixture<CheckoutPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutPersonalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
