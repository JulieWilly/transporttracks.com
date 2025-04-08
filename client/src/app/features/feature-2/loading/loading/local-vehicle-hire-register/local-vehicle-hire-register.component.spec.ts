import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalVehicleHireRegisterComponent } from './local-vehicle-hire-register.component';

describe('LocalVehicleHireRegisterComponent', () => {
  let component: LocalVehicleHireRegisterComponent;
  let fixture: ComponentFixture<LocalVehicleHireRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalVehicleHireRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalVehicleHireRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
