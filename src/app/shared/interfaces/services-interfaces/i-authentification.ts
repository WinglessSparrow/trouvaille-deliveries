import { Authentification } from '../../classes/models/back-end-communication/authentification';

export abstract class IAuthentification {
  abstract authenticate(auth: Authentification): Promise<boolean>;
  abstract logOff();
  abstract reAuthenticate(): Promise<boolean>;
}
