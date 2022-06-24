import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeStatePayload } from 'src/app/shared/classes/models/general/change-state-payload';
import { APIUrls } from 'src/app/shared/classes/utility/api-urls';
import { IGlobalResponseModel } from 'src/app/shared/interfaces/back-end-communication/i-global-response-model';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';
import { Pages } from 'src/app/shared/interfaces/enums/pages';
import { IDeliveryStateManager } from 'src/app/shared/interfaces/services-interfaces/i-delivery-state-manager';
import { ModalService } from '../component-specific/modal.service';
import { NavigationService } from '../component-specific/navigation.service';

@Injectable({
  providedIn: 'root',
})
export class DeliveryStateManagerService extends IDeliveryStateManager {
  constructor(private http: HttpClient, private router: Router) {
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

      this.http.put<IGlobalResponseModel<any>>(url, body).subscribe(
        (val) => {
          resolve(true);
        },
        (error) => {
          this.router.navigateByUrl('/' + Pages.Home);
          resolve(false);
        }
      );
    });
  }
}
