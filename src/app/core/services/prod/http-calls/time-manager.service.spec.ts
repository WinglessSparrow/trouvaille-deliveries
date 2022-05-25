import { TestBed } from '@angular/core/testing';

import { TimeManagerService } from './time-manager.service';

describe('TimeManagerService', () => {
  let service: TimeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
