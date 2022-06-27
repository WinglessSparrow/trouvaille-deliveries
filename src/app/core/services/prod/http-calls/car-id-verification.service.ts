import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BYPASS_LOG } from 'src/app/core/error-handling/http-loading.interceptor';
import { APIUrls } from 'src/app/shared/classes/utility/api-urls';
import { IGlobalResponseModel } from 'src/app/shared/interfaces/back-end-communication/i-global-response-model';
import { ICarIdVerification } from 'src/app/shared/interfaces/services-interfaces/i-car-id-verification';

@Injectable({
  providedIn: 'root',
})
export class CarIdVerificationService extends ICarIdVerification {
  constructor(private http: HttpClient) {
    super();
  }

  verifyCarId(id: string): Promise<boolean> {
    const url: string = APIUrls.VERIFY_VEHICLE + `/${id}`;
    return new Promise<boolean>((resolve) => {
      this.http.get<IGlobalResponseModel<any>>(url, { context: new HttpContext().set(BYPASS_LOG, true) }).subscribe(
        (val) => {
          resolve(true);
        }
      );
    });
  }
}
