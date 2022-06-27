import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousDetailComponent } from './hous-detail.component';

describe('HousDetailComponent', () => {
  let component: HousDetailComponent;
  let fixture: ComponentFixture<HousDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
