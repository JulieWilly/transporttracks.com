import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceBookingRegisterComponent } from './advance-booking-register.component';

describe('AdvanceBookingRegisterComponent', () => {
  let component: AdvanceBookingRegisterComponent;
  let fixture: ComponentFixture<AdvanceBookingRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceBookingRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceBookingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
