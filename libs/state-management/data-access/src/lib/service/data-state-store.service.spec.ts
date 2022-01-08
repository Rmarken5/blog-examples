import { TestBed } from '@angular/core/testing';

import { DataStateStoreService } from './data-state-store.service';

describe('DataStateStoreService', () => {
  let service: DataStateStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStateStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
