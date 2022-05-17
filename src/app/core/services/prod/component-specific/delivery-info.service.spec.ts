import { TestBed } from '@angular/core/testing';

import { DeliveryInfoService } from './delivery-info.service';

describe('DeliveryInfoService', () => {
  let service: DeliveryInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
