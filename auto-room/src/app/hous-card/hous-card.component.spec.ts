import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousCardComponent } from './hous-card.component';

describe('HousCardComponent', () => {
  let component: HousCardComponent;
  let fixture: ComponentFixture<HousCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
