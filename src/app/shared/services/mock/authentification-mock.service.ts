import { Injectable } from '@angular/core';
import { Authentification } from '../../classes/authentification';
import { AuthentificationServiceModel } from '../../models/authentification-service-model';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationMockService extends AuthentificationServiceModel {
  allowedPasswords: Array<Authentification> = new Array<Authentification>();

  constructor() {
    super();
    this.allowedPasswords.push(new Authentification('pass', 'email'));
    this.allowedPasswords.push(new Authentification('pass1', 'email2'));
    this.allowedPasswords.push(new Authentification('pass2', 'email3'));
    this.allowedPasswords.push(new Authentification('pass3', 'email4'));
    this.allowedPasswords.push(new Authentification('pass4', 'email5'));
    this.allowedPasswords.push(new Authentification('pass5', 'email6'));
  }

  logIn(auth: Authentification): Boolean {
    console.log('Loging In with: ' + auth.email + ' | ' + auth.password);

    const result: boolean =
      this.allowedPasswords.filter((val: Authentification) => {
        return val.email === auth.email && val.password === auth.password;
      }).length > 0;

    if (result) {
      return true;
    }

    return false;
  }

  logOff() {
    console.log('Loging Off');
  }
}
