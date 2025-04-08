import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestTransitRegisterComponent } from './manifest-transit-register.component';

describe('ManifestTransitRegisterComponent', () => {
  let component: ManifestTransitRegisterComponent;
  let fixture: ComponentFixture<ManifestTransitRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManifestTransitRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManifestTransitRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
