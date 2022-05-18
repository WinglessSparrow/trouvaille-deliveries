import { TestBed } from '@angular/core/testing';

import { DeliveryStateManagerService } from './delivery-state-manager.service';

describe('DeliveryStateManagerService', () => {
  let service: DeliveryStateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryStateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
