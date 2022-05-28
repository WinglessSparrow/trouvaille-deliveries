import { TestBed } from '@angular/core/testing';

import { EmployeeRetrieverService } from './employee-retriever.service';

describe('EmployeeRetrieverService', () => {
  let service: EmployeeRetrieverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeRetrieverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
