import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConnectionServiceModel } from 'src/app/shared/models/connection-service-model';

@Injectable({
  providedIn: 'root',
})
export class ConnectionMockService implements ConnectionServiceModel {
  private _isConnected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor() {}
  getConnectionStatus(): Observable<boolean> {
    setTimeout(() => {
      this._isConnected.next(false);
      setTimeout(() => {
        this._isConnected.next(true);
      }, 5000);
    }, 5000);

    return this._isConnected.asObservable();
  }
}
