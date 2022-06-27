import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Store } from '@ngxs/store';
import { SetToken } from 'src/app/core/store/token/token.action';
import {
  TokenState,
  TokenStateModel,
} from 'src/app/core/store/token/token.state';
import { Authentification } from '../../classes/models/back-end-communication/authentification';
import { IAuthentification } from '../../interfaces/services-interfaces/i-authentification';
import { LoadingService } from '../loading.service';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationMockService extends IAuthentification {
  allowedPasswords: Array<Authentification> = new Array<Authentification>();

  constructor(private loading: LoadingService, private store: Store) {
    super();
    this.allowedPasswords.push(new Authentification('email', 'pass'));
    this.allowedPasswords.push(new Authentification('email1', 'pass1'));
    this.allowedPasswords.push(new Authentification('email2', 'pass2'));
    this.allowedPasswords.push(new Authentification('email3', 'pass3'));
    this.allowedPasswords.push(new Authentification('email4', 'pass4'));
    this.allowedPasswords.push(new Authentification('email5', 'pass5'));
    this.allowedPasswords.push(new Authentification('email6', 'pass6'));
  }

  reAuthenticate(): Promise<boolean> {
    return new Promise<boolean>(async (resolve) => {
      const token: string = JSON.parse(
        (await Storage.get({ key: 'token-data' })).value
      ).token;
      const tokenInStore = this.store.selectSnapshot(TokenState).token;
      resolve(token === tokenInStore);
    });
  }

  async authenticate(auth: Authentification): Promise<boolean> {
    console.log('Logging In with: ' + auth.username + ' | ' + auth.password);

    this.loading.startLoading('logging In');

    return new Promise<boolean>((resolve) =>
      setTimeout(() => {
        let temp =
          this.allowedPasswords.filter((val: Authentification) => {
            return (
              val.username === auth.username && val.password === auth.password
            );
          }).length > 0;

        this.loading.stopLoading();

        if (temp) {
          const token = 'TOKEN-MOCK-' + this.makeId(10);
          this.store.dispatch(new SetToken(token));
        }

        resolve(temp);
      }, 500)
    );
  }

  logOff() {
    console.log('Logging Off');
  }

  makeId(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
