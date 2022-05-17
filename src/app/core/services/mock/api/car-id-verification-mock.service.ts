import { Injectable } from '@angular/core';
import { ICarIdVerification } from 'src/app/shared/interfaces/services-interfaces/i-car-id-verification';

@Injectable({
  providedIn: 'root',
})
export class CarIdVerificationMockService extends ICarIdVerification {
  constructor() {
    super();
  }

  verifyCarId(id: string): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(id == 'a token');
    });
  }
}
