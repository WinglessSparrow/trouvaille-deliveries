import { Injectable } from '@angular/core';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';
import { IRouteRetriever } from 'src/app/shared/interfaces/services-interfaces/i-route-retriever';
import { RouteData } from 'src/app/shared/classes/models/back-end-communication/route-data';
import { IDelivery } from 'src/app/shared/interfaces/back-end-communication/i-delivery';
import { IMapNode } from 'src/app/shared/interfaces/back-end-communication/i-map-node';
import { IRouteData } from 'src/app/shared/interfaces/back-end-communication/i-route-data';

@Injectable({
  providedIn: 'root',
})
export class RouteDataRetrieverMockService extends IRouteRetriever {
  constructor() {
    super();
  }

  private _deliveries: IDelivery[] = [
    {
      position: 0,
      packageid: 1,
      depth: 1,
      height: 1,
      price: 1,
      weight: 1,
      width: 1,
      srcAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 13,
        city: 'Buehl',
        country: 'Germany',
      },
      iddelivery: '0-a0',
      customer: {
        firstname: 'Huila',
        lastname: 'Morzovyi',
        email: 'mail',
      },
      dstAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 13,
        city: 'Buehl',
        country: 'Germany',
      },
      currentState: DeliveryStates.DELIVERED,
    },
    {
      position: 1,
      packageid: 1,
      depth: 1,
      height: 1,
      price: 1,
      weight: 1,
      width: 1,
      srcAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 13,
        city: 'Buehl',
        country: 'Germany',
      },
      iddelivery: '0-a1',
      customer: {
        firstname: 'Holo',
        lastname: 'The Wise Wolf',
        email: 'mail',
      },
      dstAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 14,
        city: 'Buehl',
        country: 'Germany',
      },
      currentState: DeliveryStates.DELIVERY_FAILED,
    },
    {
      position: 2,
      packageid: 1,
      depth: 1,
      height: 1,
      price: 1,
      weight: 1,
      width: 1,
      srcAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 13,
        city: 'Buehl',
        country: 'Germany',
      },
      iddelivery: '0-a2',
      customer: {
        firstname: 'Pavel',
        lastname: 'Hujavel',
        email: 'mail',
      },
      dstAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 11,
        city: 'Buehl',
        country: 'Germany',
      },
      currentState: DeliveryStates.IN_CAR,
    },
    {
      position: 3,
      packageid: 1,
      depth: 1,
      height: 1,
      price: 1,
      weight: 1,
      width: 1,
      srcAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 13,
        city: 'Buehl',
        country: 'Germany',
      },
      iddelivery: '0-a3',
      customer: {
        firstname: 'Johnatan',
        lastname: 'Joestar',
        email: 'mail',
      },
      dstAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 69,
        city: 'Buehl',
        country: 'Germany',
      },
      currentState: DeliveryStates.REQUESTED_PICKUP,
    },
    {
      position: 6,
      packageid: 1,
      depth: 1,
      height: 1,
      price: 1,
      weight: 1,
      width: 1,
      srcAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 13,
        city: 'Buehl',
        country: 'Germany',
      },
      iddelivery: '0-a6',
      customer: {
        firstname: 'Jouske',
        lastname: 'Jouske',
        email: 'mail',
      },
      dstAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 90,
        city: 'Buehl',
        country: 'Germany',
      },
      currentState: DeliveryStates.PICKED_UP,
    },
    {
      position: 4,
      packageid: 1,
      depth: 1,
      height: 1,
      price: 1,
      weight: 1,
      width: 1,
      srcAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 13,
        city: 'Buehl',
        country: 'Germany',
      },
      iddelivery: '0-a4',
      customer: {
        firstname: 'Otton',
        lastname: 'Von Otto',
        email: 'mail',
      },
      dstAddress: {
        zipcode: 77815,
        streetname: 'Prueßen Str.',
        streetnumber: 11,
        city: 'Brelin',
        country: 'Germany',
      },
      currentState: DeliveryStates.IN_CENTRAL,
    },
    {
      position: 5,
      packageid: 1,
      depth: 1,
      height: 1,
      price: 1,
      weight: 1,
      width: 1,
      srcAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 13,
        city: 'Buehl',
        country: 'Germany',
      },
      iddelivery: '0-a5',
      customer: {
        firstname: 'Mann',
        lastname: 'Männlich',
        email: 'mail',
      },
      dstAddress: {
        zipcode: 77815,
        streetname: 'Mänlicher Str.',
        streetnumber: 11,
        city: 'MannStadt',
        country: 'Germany',
      },
      currentState: DeliveryStates.IN_CENTRAL,
    },
    {
      position: 7,
      packageid: 1,
      depth: 1,
      height: 1,
      price: 1,
      weight: 1,
      width: 1,
      srcAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 13,
        city: 'Buehl',
        country: 'Germany',
      },
      iddelivery: '0-a7',
      customer: {
        firstname: 'Mister',
        lastname: 'Weiblich',
        email: 'mail',
      },
      dstAddress: {
        zipcode: 77815,
        streetname: 'Weibliche Str.',
        streetnumber: 41,
        city: 'FrauStadt',
        country: 'Hermany',
      },
      currentState: DeliveryStates.REQUESTED_PICKUP,
    },
    {
      position: 8,
      packageid: 1,
      depth: 1,
      height: 1,
      price: 1,
      weight: 1,
      width: 1,
      srcAddress: {
        zipcode: 77815,
        streetname: 'Ottenhofener Str.',
        streetnumber: 13,
        city: 'Buehl',
        country: 'Germany',
      },
      iddelivery: '0-a8',
      customer: {
        firstname: 'Man',
        lastname: 'Of West',
        email: 'mail',
      },
      dstAddress: {
        zipcode: 77815,
        streetname: 'Westliche Str.',
        streetnumber: 41,
        city: 'Tallinn',
        country: 'AusdachtLand',
      },
      currentState: DeliveryStates.REQUESTED_PICKUP,
    },
  ];

  private _wayPoints: IMapNode[] = [
    { position: 0, latitude: 48.004143, longitude: 7.823216 },
    { position: 1, latitude: 48.007432, longitude: 7.821252 },
    { position: 2, latitude: 48.016931, longitude: 7.840815 },
    { position: 3, latitude: 48.017389, longitude: 7.841782 },
    { position: 4, latitude: 48.029197, longitude: 7.836235 },
    { position: 5, latitude: 48.035572, longitude: 7.801798 },
    { position: 6, latitude: 48.025669, longitude: 7.787756 },
    { position: 7, latitude: 48.018323, longitude: 7.775134 },
    { position: 8, latitude: 48.018353, longitude: 7.715134 },
  ];

  private _routeData: IRouteData = {
    idroute: 1,
    idvehicle: 1,
    narrowpass: 0,
    nodes: this._wayPoints,
    packages: this._deliveries,
  };

  retrieveRoute(): Promise<RouteData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const routeData = new RouteData(this._routeData);
        resolve(routeData);
      }, 500);
    });
  }
}
