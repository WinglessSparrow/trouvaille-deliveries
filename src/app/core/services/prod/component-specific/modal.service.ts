import { Injectable, NgZone, Type } from '@angular/core';
import { Queue } from 'queue-typescript';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  ErrorContext,
  ErrorType,
} from 'src/app/shared/classes/models/modal-contexts/error-context';
import { HttpModalContext } from 'src/app/shared/classes/models/modal-contexts/http-context';
import { ErrorComponent } from 'src/app/shared/components/modal-views/error/error.component';
import { HttpComponent } from 'src/app/shared/components/modal-views/http/http.component';
import { TrouModalComponent } from 'src/app/shared/components/trou-modal/trou-modal.component';
import { ModalContext } from 'src/app/shared/interfaces/abstract-classes/modal-context';
import { ModalContentBase } from 'src/app/shared/interfaces/component-interfaces/modal-content-base.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _modalActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private _modal: TrouModalComponent;
  public nextModalContext: [Type<ModalContentBase>, ModalContext];
  private _pendingModals: Queue<[Type<ModalContentBase>, ModalContext]> =
    new Queue<[Type<ModalContentBase>, ModalContext]>();

  constructor(private zone: NgZone) {}

  public openModal(content: Type<ModalContentBase>, context: ModalContext) {
    if (!this._modalActive.value) {
      this.zone.run(() => {
        this.nextModalContext = [content, context];
        this._modalActive.next(true);
      });
    } else {
      this._pendingModals.enqueue([content, context]);
    }
  }

  public openHttpModal(
    status: number = 200,
    message: string = 'Ok',
    url: string = 'http://your-mom.room'
  ) {
    this.openModal(HttpComponent, new HttpModalContext(status, message, url));
  }

  public openErrorModal(text: string, header: string = 'Error') {
    this.openModal(
      ErrorComponent,
      new ErrorContext(
        header,
        text,
        'got ya',
        () => this.close(),
        ErrorType.ERROR
      )
    );
  }

  public openBugModal(text: string, header: string = 'Bug') {
    this.openModal(
      ErrorComponent,
      new ErrorContext(
        header,
        text,
        'got ya',
        () => this.close(),
        ErrorType.BUG
      )
    );
  }

  public openNotificationModal(text: string, header: string = 'Notification') {
    this.openModal(
      ErrorComponent,
      new ErrorContext(
        header,
        text,
        'got ya',
        () => this.close(),
        ErrorType.NOTIFICATION
      )
    );
  }

  public logModalError(content: Type<ModalContentBase>) {
    console.error(
      `You attempted to open a Modal while another one is already open (opened modal: ${content.toString()})`
    );
  }

  public close() {
    this._modalActive.next(false);
    if (this._pendingModals.length > 0) {
      setTimeout(() => {
        const modalData = this._pendingModals.dequeue();
        this.openModal(modalData[0], modalData[1]);
      }, 50);
    }
  }

  /**
   * Getter modalActive
   * @return {BehaviorSubject<boolean> }
   */
  public get modalActive(): Observable<boolean> {
    this.nextModalContext = null;
    return this._modalActive.asObservable();
  }

  /**
   * Setter modal
   * @param {TrouModalComponent} value
   */
  public set modal(value: TrouModalComponent) {
    this._modal = value;
  }
}
