import { TestBed } from '@angular/core/testing';

import { DeliveryStateMachineService } from './delivery-state-machine.service';

describe('DeliveryStateMachineService', () => {
  let service: DeliveryStateMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryStateMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
