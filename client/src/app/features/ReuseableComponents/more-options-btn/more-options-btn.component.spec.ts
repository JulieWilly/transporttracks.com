import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOptionsBtnComponent } from './more-options-btn.component';

describe('MoreOptionsBtnComponent', () => {
  let component: MoreOptionsBtnComponent;
  let fixture: ComponentFixture<MoreOptionsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreOptionsBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreOptionsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
