import { TestBed } from '@angular/core/testing';

import { DeliveryScanService } from './delivery-scan.service';

describe('DeliveryScanService', () => {
  let service: DeliveryScanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryScanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
