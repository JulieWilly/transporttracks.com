import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLoadingSlipsComponent } from './manage-loading-slips.component';

describe('ManageLoadingSlipsComponent', () => {
  let component: ManageLoadingSlipsComponent;
  let fixture: ComponentFixture<ManageLoadingSlipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageLoadingSlipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageLoadingSlipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
