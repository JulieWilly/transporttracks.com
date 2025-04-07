import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkBookingPrintAayushComponent } from './bulk-booking-print-aayush.component';

describe('BulkBookingPrintAayushComponent', () => {
  let component: BulkBookingPrintAayushComponent;
  let fixture: ComponentFixture<BulkBookingPrintAayushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkBookingPrintAayushComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkBookingPrintAayushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
