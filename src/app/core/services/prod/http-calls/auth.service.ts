import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/internal/operators/map';
import { SetToken } from 'src/app/core/store/token/token.action';
import { Authentification } from 'src/app/shared/classes/models/back-end-communication/authentification';
import { TokenResponse } from 'src/app/shared/classes/models/back-end-communication/token-response';
import { IGlobalResponseModel } from 'src/app/shared/interfaces/back-end-communication/i-global-response-model';
import { ITokenResponse } from 'src/app/shared/interfaces/back-end-communication/i-token-response';
import { IAuthentification } from 'src/app/shared/interfaces/services-interfaces/i-authentification';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends IAuthentification {
  constructor(private http: HttpClient, private store: Store) {
    super();
  }

  authenticate(auth: Authentification): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.http
        .post<IGlobalResponseModel<ITokenResponse>>(
          'https://td.vvjm.dev/api/auth',
          JSON.stringify(auth),
          { headers: { 'Content-Type': 'application/json; charset=utf-8' } }
        )
        .pipe(map((val) => new TokenResponse(val.data[0])))
        .subscribe((val) => {
          this.store.dispatch(new SetToken(val.token));
          resolve(true);
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
