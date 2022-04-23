import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetToken } from 'src/app/core/state/token/token.action';

import { Authentification } from '../../classes/back-end-communication/authentification';
import { AuthentificationServiceModel } from '../../models/authentification-service-model';
import { LoadingService } from '../loading.service';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationMockService extends AuthentificationServiceModel {
  reAuthenticate() {
    console.log("BipBop I'm a mock: Successfully Authenticated");
  }
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
          this.store.dispatch(new SetToken('TOKEN-MOCK-' + this.makeId(10)));
        }

        resolve(temp);
      }, 2000)
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
