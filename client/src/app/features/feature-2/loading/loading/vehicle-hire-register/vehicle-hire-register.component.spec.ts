import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleHireRegisterComponent } from './vehicle-hire-register.component';

describe('VehicleHireRegisterComponent', () => {
  let component: VehicleHireRegisterComponent;
  let fixture: ComponentFixture<VehicleHireRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleHireRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleHireRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
