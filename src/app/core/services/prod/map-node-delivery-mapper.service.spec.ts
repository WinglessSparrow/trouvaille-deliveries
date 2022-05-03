import { TestBed } from '@angular/core/testing';

import { MapNodeDeliveryMapperService } from './map-node-delivery-mapper.service';

describe('MapNodeDeliveryMapperService', () => {
  let service: MapNodeDeliveryMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapNodeDeliveryMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
