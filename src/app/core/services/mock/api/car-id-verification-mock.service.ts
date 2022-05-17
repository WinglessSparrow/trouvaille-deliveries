import { Injectable } from '@angular/core';
import { CarIdVerificationModel } from 'src/app/shared/classes/car-id-verification-model';

@Injectable({
  providedIn: 'root',
})
export class CarIdVerificationMockService extends CarIdVerificationModel {
  constructor() {
    super();
  }

  verifyCarId(id: string): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(id == 'a token');
    });
  }
}
