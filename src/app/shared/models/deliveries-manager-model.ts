import { Delivery } from '../classes/back-end-communication/delivery';
import { PackageStates } from './package-states';

export abstract class DeliveriesManagerModel {
  public abstract getAllPackages(): Promise<Delivery[]>;
  public abstract countPackages(): Promise<number>;
  public abstract changeState(newDelivery: Delivery);
}
