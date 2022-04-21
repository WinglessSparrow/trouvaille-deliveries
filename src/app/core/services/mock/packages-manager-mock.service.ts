import { Injectable } from '@angular/core';
import { Package } from 'src/app/shared/classes/package';
import { PackagesManagerModel } from 'src/app/shared/models/packages-manager-model';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class PackagesManagerMockService implements PackagesManagerModel {
  constructor(private loading: LoadingService) {}

  public getAllPackages(): Package[] {
    let ret: Package[];

    this.loading.startLoading('getting Packages');
    setTimeout(() => {
      //TODO Cannot be done unless Backend explains to me the fucckery with the Atributes
      ret = [new Package({ idDelivery: 'ho' })];
    }, 2000);

    this.loading.stopLoading();

    return ret;
  }
  public getPackagesInRange(from: number, to: number): Package[] {
    throw new Error('Method not implemented.');
  }
  public sendPackages(): Package[] {
    throw new Error('Method not implemented.');
  }
  public countPackages(): Package[] {
    throw new Error('Method not implemented.');
  }
}
