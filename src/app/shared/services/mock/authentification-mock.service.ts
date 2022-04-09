import { Injectable } from '@angular/core';
import { Authentification } from '../../classes/authentification';
import { AuthentificationServiceModel } from '../../models/authentification-service-model';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationMockService extends AuthentificationServiceModel {
  constructor() {
    super();
  }

  logIn(auth: Authentification): Boolean {
    console.log('Loging In with: ' + auth.email + ' | ' + auth.password);
    return true;
  }

  logOff() {
    console.log('Loging Off');
  }
}
