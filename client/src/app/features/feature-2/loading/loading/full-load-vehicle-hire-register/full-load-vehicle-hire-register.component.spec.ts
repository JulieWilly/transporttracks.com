import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLoadVehicleHireRegisterComponent } from './full-load-vehicle-hire-register.component';

describe('FullLoadVehicleHireRegisterComponent', () => {
  let component: FullLoadVehicleHireRegisterComponent;
  let fixture: ComponentFixture<FullLoadVehicleHireRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullLoadVehicleHireRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullLoadVehicleHireRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
