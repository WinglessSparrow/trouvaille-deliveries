import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ErrorContext } from 'src/app/shared/classes/error-context';
import { ErrorComponent } from 'src/app/shared/components/error/error.component';
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
      this.logModalError(content);
      //TODO Maybe implement some kind of a queue for modals, or smth
    }
  }

  //FIXME very bad, should have some kind of logger service
  //the future will take care of that
  //I'm sure
  public logModalError(content: Type<ModalContentBase>) {
    console.error(
      `You attempted to open a Modal while another one is already open (opened modal: ${content.toString()})`
    );
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
