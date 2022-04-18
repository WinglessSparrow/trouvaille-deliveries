import { TestBed } from '@angular/core/testing';

import { TimeStateMachineService } from './time-state-machine.service';

describe('TimeStateMachineService', () => {
  let service: TimeStateMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeStateMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
