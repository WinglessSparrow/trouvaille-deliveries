import { TestBed } from '@angular/core/testing';

import { RoutingFactoryService } from './routing-factory.service';

describe('RoutingFactoryService', () => {
  let service: RoutingFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
