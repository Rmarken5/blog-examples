import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateFeatureComponent } from './state-feature.component';
import { MockHttpService } from '../../../../data-access/src/lib/service/mock-http.service';
import { DataStateStoreService } from '../../../../data-access/src/lib/service/data-state-store.service';

describe('StateFeatureComponent', () => {
  let component: StateFeatureComponent;
  let fixture: ComponentFixture<StateFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StateFeatureComponent],
      imports: [],
      providers: [MockHttpService, DataStateStoreService],
    }).compileComponents();
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
