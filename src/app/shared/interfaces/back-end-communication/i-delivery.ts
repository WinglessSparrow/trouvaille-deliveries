import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';
import { IAddress } from './i-address';
import { ICustomer } from './i-customer';

export interface IDelivery {
  position: number;

  packageid: number;
  iddelivery: string;

  customer: ICustomer;

  dstAddress: IAddress;
  srcAddress: IAddress;

  state: string;

  weight: number;
  height: number;
  width: number;
  depth: number;
  price: number;
}
