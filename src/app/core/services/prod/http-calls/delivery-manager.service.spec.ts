import { TestBed } from '@angular/core/testing';

import { DeliveriesManagerService } from './delivery-manager.service';

describe('DeliveryManagerService', () => {
  let service: DeliveriesManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveriesManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
