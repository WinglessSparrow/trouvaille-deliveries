import { Observable } from 'rxjs';

export abstract class ConnectionServiceModel {
  abstract getConnectionStatus(): Observable<boolean>;
}
