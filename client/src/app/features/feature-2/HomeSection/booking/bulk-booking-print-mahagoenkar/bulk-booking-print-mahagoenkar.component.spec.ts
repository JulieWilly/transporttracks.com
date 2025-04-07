import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkBookingPrintMahagoenkarComponent } from './bulk-booking-print-mahagoenkar.component';

describe('BulkBookingPrintMahagoenkarComponent', () => {
  let component: BulkBookingPrintMahagoenkarComponent;
  let fixture: ComponentFixture<BulkBookingPrintMahagoenkarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkBookingPrintMahagoenkarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkBookingPrintMahagoenkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
