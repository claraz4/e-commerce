import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemTotalComponent } from './cart-item-total.component';

describe('CartItemTotalComponent', () => {
  let component: CartItemTotalComponent;
  let fixture: ComponentFixture<CartItemTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartItemTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartItemTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
