import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharableSearchInputComponent } from './sharable-search-input.component';

describe('SharableSearchInputComponent', () => {
  let component: SharableSearchInputComponent;
  let fixture: ComponentFixture<SharableSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharableSearchInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharableSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
