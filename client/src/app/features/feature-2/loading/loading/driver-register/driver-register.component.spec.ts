import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRegisterComponent } from './driver-register.component';

describe('DriverRegisterComponent', () => {
  let component: DriverRegisterComponent;
  let fixture: ComponentFixture<DriverRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
