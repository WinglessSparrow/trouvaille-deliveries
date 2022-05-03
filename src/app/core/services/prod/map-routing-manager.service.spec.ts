import { TestBed } from '@angular/core/testing';

import { MapRoutingManagerService } from './map-routing-manager.service';

describe('MapRoutingManagerService', () => {
  let service: MapRoutingManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapRoutingManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
