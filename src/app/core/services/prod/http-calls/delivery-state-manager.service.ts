import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangeStatePayload } from 'src/app/shared/classes/models/general/change-state-payload';
import { APIUrls } from 'src/app/shared/classes/utility/api-urls';
import { IGlobalResponseModel } from 'src/app/shared/interfaces/back-end-communication/i-global-response-model';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';
import { IDeliveryStateManager } from 'src/app/shared/interfaces/services-interfaces/i-delivery-state-manager';

@Injectable({
  providedIn: 'root',
})
export class DeliveryStateManagerService extends IDeliveryStateManager {
  constructor(private http: HttpClient) {
    super();
  }

  changeState(newState: ChangeStatePayload): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const url: string =
        APIUrls.CHANGE_STATE + `/${newState.originalDelivery.iddelivery}`;
      const body: string =
        Object.keys(DeliveryStates)[
          Object.values(DeliveryStates).indexOf(newState.nextState)
        ];
      this.http.put<IGlobalResponseModel<any>>(url, body).subscribe((val) => {
        const f = val;
        resolve(true);
      });
    });
  }
}
