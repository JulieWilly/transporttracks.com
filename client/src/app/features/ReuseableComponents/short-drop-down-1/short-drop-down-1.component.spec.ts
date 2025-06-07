import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortDropDown1Component } from './short-drop-down-1.component';

describe('ShortDropDown1Component', () => {
  let component: ShortDropDown1Component;
  let fixture: ComponentFixture<ShortDropDown1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortDropDown1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortDropDown1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
