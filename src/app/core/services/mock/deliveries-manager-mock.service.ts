import { Injectable } from '@angular/core';
import { Address } from 'src/app/shared/classes/back-end-communication/address';
import { Customer } from 'src/app/shared/classes/back-end-communication/customer';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { DeliveriesManagerModel } from 'src/app/shared/models/deliveries-manager-model';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class DeliveriesManagerMockService implements DeliveriesManagerModel {
  constructor(private loading: LoadingService) {}

  private _deliveries: Delivery[] = [
    new Delivery({
      index: 0,
      idDelivery: '0-a0',
      customer: new Customer({
        firstName: 'Huila',
        lastName: 'Morzovyi',
        email: 'mail',
      }),
      dstAddress: new Address({
        zipcode: 77815,
        streetName: 'Ottenhofener Str.',
        streetNumber: 13,
        city: 'Buehl',
        country: 'Germany',
      }),
      state: DeliveryStates.DELIVERED,
    }),
    new Delivery({
      index: 1,
      idDelivery: '0-a1',
      customer: new Customer({
        firstName: 'Holo',
        lastName: 'The Wise Wolf',
        email: 'mail',
      }),
      dstAddress: new Address({
        zipcode: 77815,
        streetName: 'Ottenhofener Str.',
        streetNumber: 14,
        city: 'Buehl',
        country: 'Germany',
      }),
      state: DeliveryStates.DELIVERY_FAILED,
    }),
    new Delivery({
      index: 2,
      idDelivery: '0-a2',
      customer: new Customer({
        firstName: 'Pavel',
        lastName: 'Hujavel',
        email: 'mail',
      }),
      dstAddress: new Address({
        zipcode: 77815,
        streetName: 'Ottenhofener Str.',
        streetNumber: 11,
        city: 'Buehl',
        country: 'Germany',
      }),
      state: DeliveryStates.IN_CAR,
    }),
    new Delivery({
      index: 3,
      idDelivery: '0-a3',
      customer: new Customer({
        firstName: 'Johnatan',
        lastName: 'Joestar',
        email: 'mail',
      }),
      dstAddress: new Address({
        zipcode: 77815,
        streetName: 'Ottenhofener Str.',
        streetNumber: 11,
        city: 'Buehl',
        country: 'Germany',
      }),
      state: DeliveryStates.REQUESTED_PICKUP,
    }),
    new Delivery({
      index: 4,
      idDelivery: '0-a4',
      customer: new Customer({
        firstName: 'Otton',
        lastName: 'Von Otto',
        email: 'mail',
      }),
      dstAddress: new Address({
        zipcode: 77815,
        streetName: 'Prueßen Str.',
        streetNumber: 11,
        city: 'Brelin',
        country: 'Germany',
      }),
      state: DeliveryStates.IN_CENTRAL,
    }),
    new Delivery({
      index: 5,
      idDelivery: '0-a5',
      customer: new Customer({
        firstName: 'Mann',
        lastName: 'Männlich',
        email: 'mail',
      }),
      dstAddress: new Address({
        zipcode: 77815,
        streetName: 'Mänlicher Str.',
        streetNumber: 11,
        city: 'MannStadt',
        country: 'Germany',
      }),
      state: DeliveryStates.IN_CENTRAL,
    }),
  ];

  public getAllPackages(): Promise<Delivery[]> {
    this.loading.startLoading('getting deliveries');

    return new Promise((resolve) =>
      setTimeout(() => {
        this.loading.stopLoading();
        resolve(this._deliveries);
      }, 1000)
    );
  }

  public countPackages(): Promise<number> {
    this.loading.startLoading('counting deliveries');

    return new Promise((resolve) =>
      setTimeout(() => {
        this.loading.stopLoading();
        resolve(2);
      }, 1000)
    );
  }

  public async changeState(newDelivery: Delivery) {
    await new Promise((resolve) => setTimeout(() => {}, 3000));
    console.log(
      `bip-bop I'm  a mock, \n I changed the state of the delivery ${newDelivery.idDelivery} to ${newDelivery.state}`
    );
  }
}
