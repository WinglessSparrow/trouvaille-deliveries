import { Delivery } from '../classes/back-end-communication/delivery';

export abstract class DeliveriesManagerModel {
  public abstract getAllPackages(): Promise<Delivery[]>;
  public abstract countPackages(): Promise<number>;
  public abstract changeState(newDelivery: Delivery);
}
