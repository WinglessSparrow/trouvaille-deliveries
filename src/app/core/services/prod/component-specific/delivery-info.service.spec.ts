import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DeliveryInfoService } from './delivery-info.service';

const RouterSpy = jasmine.createSpyObj('Router', ['navigate']);

describe('DeliveryInfoService', () => {
  let service: DeliveryInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Router,
          useValue: RouterSpy,
        },
      ],
    });

    service = TestBed.inject(DeliveryInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
