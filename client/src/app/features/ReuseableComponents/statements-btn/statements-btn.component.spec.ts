import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementsBtnComponent } from './statements-btn.component';

describe('StatementsBtnComponent', () => {
  let component: StatementsBtnComponent;
  let fixture: ComponentFixture<StatementsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatementsBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatementsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
