import { TestBed } from '@angular/core/testing';

import { MapFactoryService } from './map-factory.service';

describe('MapFactoryService', () => {
  let service: MapFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
