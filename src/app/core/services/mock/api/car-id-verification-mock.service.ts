import { Injectable } from '@angular/core';
import { ICarIdVerification } from 'src/app/shared/interfaces/services-interfaces/i-car-id-verification';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class CarIdVerificationMockService extends ICarIdVerification {
  constructor(private loading: LoadingService) {
    super();
  }

  verifyCarId(id: string): Promise<boolean> {
    this.loading.startLoading('verifying Car');
    return new Promise((resolve) => {
      setTimeout(() => {
        this.loading.stopLoading();
        resolve(id == 'a token');
      }, 300);
    });
  }
}
