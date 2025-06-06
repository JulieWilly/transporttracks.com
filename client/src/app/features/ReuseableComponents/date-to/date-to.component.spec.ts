import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateToComponent } from './date-to.component';

describe('DateToComponent', () => {
  let component: DateToComponent;
  let fixture: ComponentFixture<DateToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateToComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
