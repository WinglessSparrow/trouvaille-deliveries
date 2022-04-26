import { TestBed } from '@angular/core/testing';

import { DeliveryStatesService } from './delivery-states.service';

describe('DeliveryStatesService', () => {
  let service: DeliveryStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
