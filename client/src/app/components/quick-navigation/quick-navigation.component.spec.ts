import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickNavigationComponent } from './quick-navigation.component';

describe('QuickNavigationComponent', () => {
  let component: QuickNavigationComponent;
  let fixture: ComponentFixture<QuickNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
