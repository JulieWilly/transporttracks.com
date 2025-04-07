import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstationDispatchComponent } from './outstation-dispatch.component';

describe('OutstationDispatchComponent', () => {
  let component: OutstationDispatchComponent;
  let fixture: ComponentFixture<OutstationDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutstationDispatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstationDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
