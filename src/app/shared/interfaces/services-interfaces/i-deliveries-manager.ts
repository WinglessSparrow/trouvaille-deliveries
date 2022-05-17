import { Delivery } from '../../classes/models/back-end-communication/delivery';

export abstract class IDeliveriesManager {
  public abstract getAllPackages(): Promise<Delivery[]>;
  public abstract countPackages(): Promise<number>;
  public abstract changeState(newDelivery: Delivery);
}
