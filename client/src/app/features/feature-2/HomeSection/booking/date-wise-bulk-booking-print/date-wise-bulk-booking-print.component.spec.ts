import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseBulkBookingPrintComponent } from './date-wise-bulk-booking-print.component';

describe('DateWiseBulkBookingPrintComponent', () => {
  let component: DateWiseBulkBookingPrintComponent;
  let fixture: ComponentFixture<DateWiseBulkBookingPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateWiseBulkBookingPrintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateWiseBulkBookingPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
