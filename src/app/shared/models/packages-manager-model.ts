import { Package } from '../classes/package';

export abstract class PackagesManagerModel {
  public abstract getAllPackages(): Package[];
  public abstract getPackagesInRange(from: number, to: number): Package[];
  public abstract sendPackages(): Package[];
  public abstract countPackages(): Package[];
}
