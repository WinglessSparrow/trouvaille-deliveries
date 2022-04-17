import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TrouModalComponent } from 'src/app/shared/components/trou-modal/trou-modal.component';
import { ModalContentBase } from 'src/app/shared/models/components/modal-content-base.component';
import { ModalContext } from 'src/app/shared/models/data-models/modal-context';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _modalActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private _modal: TrouModalComponent;

  constructor() {}

  public openModal(content: Type<ModalContentBase>, context: ModalContext) {
    if (!this._modalActive.value) {
      this._modal.setContent(content, context);
      this._modalActive.next(true);
    } else {
      console.log('ONLY ONE MODAL AT A TIME');
      //TODO Maybe implement some kind of a queue for modals, or smth
    }
  }

  public close() {
    this._modalActive.next(false);
    this._modal.ngOnDestroy();
  }

  /**
   * Getter modalActive
   * @return {BehaviorSubject<boolean> }
   */
  public get modalActive(): Observable<boolean> {
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
