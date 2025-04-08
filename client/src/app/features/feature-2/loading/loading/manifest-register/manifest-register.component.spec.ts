import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestRegisterComponent } from './manifest-register.component';

describe('ManifestRegisterComponent', () => {
  let component: ManifestRegisterComponent;
  let fixture: ComponentFixture<ManifestRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManifestRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManifestRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
