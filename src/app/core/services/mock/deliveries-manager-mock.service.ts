import { Injectable } from '@angular/core';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { DeliveriesManagerModel } from 'src/app/shared/models/deliveries-manager-model';
import { PackageStates } from 'src/app/shared/models/package-states';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class DeliveriesManagerMockService implements DeliveriesManagerModel {
  constructor(private loading: LoadingService) {}

  private _deliveries: Delivery[] = [
    new Delivery({
      index: 11,
      id: '0-21831kod092i1-d',
      recipient: {
        name: 'Huila Morzovyi',
        address: 'ottenhofener Str 10',
      },
      state: PackageStates.AddressNotIdentifiable,
    }),
    new Delivery({
      index: 1,
      id: '0-2183112rfdd092i1-d',
      recipient: {
        name: 'Holo the Wise wolf',
        address: 'ottenhofener Str 7',
      },
      state: PackageStates.PickedUp,
    }),
    new Delivery({
      index: 0,
      id: '0-21831k556c092i1-d',
      recipient: {
        name: 'Johnatan Joestar',
        address: 'ottenhofener Str 17',
      },
      state: PackageStates.PickUpNotPossible,
    }),
    new Delivery({
      index: 3,
      id: '0-21831ko21542i1-d',
      recipient: {
        name: 'Pavel Hujavel',
        address: 'ottenhofener Str 13',
      },
      state: PackageStates.InDelivery,
    }),
    new Delivery({
      index: 9,
      id: '0-21831kod092gsd-d',
      recipient: {
        name: 'Mister Twister',
        address: 'ottenhofener Str 3',
      },
      state: PackageStates.Delivered,
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
      `bip-bop I'm  a mock, \n I changed the state of the delivery ${newDelivery.id} to ${newDelivery.state}`
    );
  }
}
