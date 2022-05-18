import { TestBed } from '@angular/core/testing';

import { RouteDataRetrieverService } from './route-data-retriever.service';

describe('RouteDataRetrieverService', () => {
  let service: RouteDataRetrieverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteDataRetrieverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
