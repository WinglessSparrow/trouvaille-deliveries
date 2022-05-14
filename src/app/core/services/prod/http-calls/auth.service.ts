import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetToken } from 'src/app/core/state/token/token.action';
import { Authentification } from 'src/app/shared/classes/back-end-communication/authentification';
import { GlobalResponseModel } from 'src/app/shared/classes/back-end-communication/global-response-model';
import { TokenResponse } from 'src/app/shared/classes/back-end-communication/token-response';
import { AuthentificationServiceModel } from 'src/app/shared/models/authentification-service-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AuthentificationServiceModel {
  constructor(private http: HttpClient, private store: Store) {
    super();
  }

  authenticate(auth: Authentification): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.http
        .post<GlobalResponseModel<TokenResponse>>(
          'https://td.vvjm.dev/api/auth',
          JSON.stringify(auth),
          { headers: { 'Content-Type': 'application/json; charset=utf-8' } }
        )
        .toPromise()
        .then((val) => {
          this.store.dispatch(new SetToken(val.data[0].token));
          resolve(true);
        })
        .catch((e) => {
          resolve(false);
        });
    });
  }

  logOff(): void {
    throw new Error('Method not implemented.');
  }
  reAuthenticate() {
    throw new Error('Method not implemented.');
  }
}
