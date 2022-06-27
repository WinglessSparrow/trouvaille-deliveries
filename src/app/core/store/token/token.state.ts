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
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Pages } from 'src/app/shared/interfaces/enums/pages';
import { JsonpClientBackend } from '@angular/common/http';

interface TokenData {
  token: string;
  tokenDate: string;
}

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
  constructor(
    private store: Store,
    private auth: IAuthentification,
    private router: Router
  ) {}

  async ngxsOnInit({ setState, getState }: StateContext<TokenStateModel>) {
    let isValidTokenPresent: boolean = false;

    if (getState()) {
      const tokenData = JSON.parse(
        (await Storage.get({ key: 'token-data' })).value
      );

      if (tokenData) {
        const token = tokenData.token;
        const date = tokenData.tokenDate;
        const tokenDate: Date = new Date(date);
        const twoHrs = 2 * 60 * 60 * 1000;

        const saveDateDelta = Date.now() - tokenDate.getTime();

        if (saveDateDelta < twoHrs) {
          isValidTokenPresent = true;

          let nextState = new TokenStateModel();
          nextState.token = token;

          setState(nextState);

          isValidTokenPresent = await this.auth.reAuthenticate();
        }
      }
    }

    if (isValidTokenPresent) {
      this.store
        .dispatch(InitRouteData)
        .pipe(first())
        .subscribe(() => {
          this.store.dispatch(InitEmployee);
        });
    } else {
      this.store.dispatch(ClearToken);
      this.router.navigateByUrl(Pages.Login);
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

    await Storage.set({
      key: 'token-data',
      value: JSON.stringify({
        token: payload,
        tokenDate: new Date().toISOString(),
      }),
    });

    setState(newState);
  }

  @Action(ClearToken)
  async clearToken({ setState }: StateContext<TokenStateModel>) {
    let newState = new TokenStateModel();
    newState.token = '';

    await Storage.remove({ key: 'token-data' });

    setState(newState);
  }
}
