import { Package } from 'src/app/shared/classes/package';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';
import { Injectable, setTestabilityGetter } from '@angular/core';
import { ChangePackage } from './package.action';

export class PackageStateModel {
  packages: Package[];
}

@State<PackageStateModel>({
  name: 'packages',
  defaults: {
    packages: [],
  },
})
@Injectable()
export class PackageState {
  //TODO getting packages from getter Service

  @Selector()
  static getPackages(state: PackageStateModel) {
    return state.packages;
  }

  @Action(ChangePackage)
  change(
    { getState, setState }: StateContext<PackageStateModel>,
    { payload }: ChangePackage
  ) {
    const newState = produce(getState(), (draft: PackageStateModel) => {
      const origObj = draft.packages.find((val) => {
        payload.idDelivery == val.idDelivery;
      });
      draft[draft.packages.indexOf(origObj)] = payload;
    });
    setState(newState);
  }
}
