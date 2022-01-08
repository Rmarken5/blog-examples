import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateFeatureComponent } from './state-feature.component';

describe('StateFeatureComponent', () => {
  let component: StateFeatureComponent;
  let fixture: ComponentFixture<StateFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
