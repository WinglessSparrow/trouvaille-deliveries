import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { TokenRefresherModel } from 'src/app/shared/models/token-refresher-model';
import { InitDeliveriesState } from '../deliveries/deliveries.action';
import { ClearToken, RefreshToken, SetToken } from './token.action';

export class TokenStateModel {
  token: string;
}

@State<TokenStateModel>({
  name: 'token',
  defaults: {
    token: '',
  },
})
@Injectable()
export class TokenState {
  //TODO getting packages from getter Service

  constructor(
    private store: Store,
    private tokenRefresher: TokenRefresherModel
  ) {}

  @Selector()
  static getToken(state: TokenStateModel) {
    return state.token;
  }

  @Action(SetToken)
  setToken({ setState }: StateContext<TokenStateModel>, { payload }: SetToken) {
    let newState = new TokenStateModel();
    newState.token = payload;
    setState(newState);
  }

  @Action(ClearToken)
  clearToken({ setState }: StateContext<TokenStateModel>) {
    let newState = new TokenStateModel();
    newState.token = '';
    setState(newState);
  }

  @Action(RefreshToken)
  refreshToken() {
    //TODO maybe I might need to reset the token here, IDK
    this.tokenRefresher.refreshToken();
  }
}
