import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharableTableComponent } from './sharable-table.component';

describe('SharableTableComponent', () => {
  let component: SharableTableComponent;
  let fixture: ComponentFixture<SharableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharableTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
