import { Injectable } from '@angular/core';
import {
  Action,
  NgxsOnInit,
  Selector,
  State,
  StateContext,
  Store,
} from '@ngxs/store';
import { ClearToken, SetToken } from './token.action';
import { Storage } from '@capacitor/storage';
import { IAuthentification } from 'src/app/shared/interfaces/services-interfaces/i-authentification';
import { InitRouteData } from '../route-data/route-data.action';
import { InitEmployee } from '../employee/employee.action';

export class TokenStateModel {
  token: string;
}

@State<TokenStateModel>({
  name: 'token',
  defaults: {
    token: null,
  },
})
@Injectable()
export class TokenState implements NgxsOnInit {
  constructor(private store: Store, private auth: IAuthentification) {}

  async ngxsOnInit({ setState }: StateContext<TokenStateModel>) {
    let isValidTokenPresent: boolean = false;

    const token = (await Storage.get({ key: 'token' })).value;

    if (token) {
      isValidTokenPresent = true;

      let nextState = new TokenStateModel();
      nextState.token = token;

      setState(nextState);

      isValidTokenPresent = await this.auth.reAuthenticate();
    }

    if (isValidTokenPresent) {
      this.store.dispatch(InitRouteData);
      setTimeout(() => {
        this.store.dispatch(InitEmployee);
      }, 200);
    } else {
      this.store.dispatch(ClearToken);
    }
  }

  @Selector()
  static getToken(state: TokenStateModel) {
    return state.token;
  }

  @Action(SetToken)
  async setToken(
    { setState }: StateContext<TokenStateModel>,
    { payload }: SetToken
  ) {
    let newState = new TokenStateModel();
    newState.token = payload;

    await Storage.set({ key: 'token', value: payload });

    setState(newState);
  }

  @Action(ClearToken)
  async clearToken({ setState }: StateContext<TokenStateModel>) {
    let newState = new TokenStateModel();
    newState.token = '';

    await Storage.remove({ key: 'token' });

    setState(newState);
  }
}
