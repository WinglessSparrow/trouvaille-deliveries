import { Authentification } from '../classes/authentification';

export abstract class AuthentificationServiceModel {
  constructor() {}
  abstract logIn(auth: Authentification): Boolean;
  abstract logOff();
}
