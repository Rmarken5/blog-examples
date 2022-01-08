import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateFeatureComponentComponent } from './state-feature-component.component';

describe('StateFeatureComponentComponent', () => {
  let component: StateFeatureComponentComponent;
  let fixture: ComponentFixture<StateFeatureComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateFeatureComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateFeatureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
