import { Authentification } from '../classes/back-end-communication/authentification';

export abstract class AuthentificationServiceModel {
  abstract authenticate(auth: Authentification): Promise<boolean>;
  abstract logOff();
  abstract reAuthenticate();
}
