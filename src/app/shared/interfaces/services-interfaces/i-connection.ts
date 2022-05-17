import { Observable } from 'rxjs';

export abstract class IConnection {
  abstract getConnectionStatus(): Observable<boolean>;
}
