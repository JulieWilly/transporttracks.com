import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkBookingPrintLokenathExpressComponent } from './bulk-booking-print-lokenath-express.component';

describe('BulkBookingPrintLokenathExpressComponent', () => {
  let component: BulkBookingPrintLokenathExpressComponent;
  let fixture: ComponentFixture<BulkBookingPrintLokenathExpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkBookingPrintLokenathExpressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkBookingPrintLokenathExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
