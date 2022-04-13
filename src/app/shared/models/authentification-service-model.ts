import { Authentification } from '../classes/authentification';

export abstract class AuthentificationServiceModel {
  //TODO async?
  constructor() {}
  abstract logIn(auth: Authentification): Boolean;
  abstract logOff();
}
