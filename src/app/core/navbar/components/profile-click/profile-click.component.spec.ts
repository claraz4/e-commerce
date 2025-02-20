import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileClickComponent } from './profile-click.component';

describe('ProfileClickComponent', () => {
  let component: ProfileClickComponent;
  let fixture: ComponentFixture<ProfileClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileClickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
