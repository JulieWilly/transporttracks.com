import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolPumpRegisterComponent } from './petrol-pump-register.component';

describe('PetrolPumpRegisterComponent', () => {
  let component: PetrolPumpRegisterComponent;
  let fixture: ComponentFixture<PetrolPumpRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetrolPumpRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrolPumpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
