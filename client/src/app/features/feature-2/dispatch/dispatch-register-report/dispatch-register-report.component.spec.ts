import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchRegisterReportComponent } from './dispatch-register-report.component';

describe('DispatchRegisterReportComponent', () => {
  let component: DispatchRegisterReportComponent;
  let fixture: ComponentFixture<DispatchRegisterReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispatchRegisterReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispatchRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
