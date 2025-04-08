import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleVendorsComponent } from './vehicle-vendors.component';

describe('VehicleVendorsComponent', () => {
  let component: VehicleVendorsComponent;
  let fixture: ComponentFixture<VehicleVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleVendorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
