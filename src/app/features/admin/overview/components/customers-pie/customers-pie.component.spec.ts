import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersPieComponent } from './customers-pie.component';

describe('CustomersPieComponent', () => {
  let component: CustomersPieComponent;
  let fixture: ComponentFixture<CustomersPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
