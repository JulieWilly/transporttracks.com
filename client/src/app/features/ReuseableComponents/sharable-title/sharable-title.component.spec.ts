import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharableTitleComponent } from './sharable-title.component';

describe('SharableTitleComponent', () => {
  let component: SharableTitleComponent;
  let fixture: ComponentFixture<SharableTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharableTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharableTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
