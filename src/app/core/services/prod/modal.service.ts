import { Injectable, NgZone, Type } from '@angular/core';
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
  public nextModalContext: {
    content: Type<ModalContentBase>;
    context: ModalContext;
  };

  constructor(private zone: NgZone) {
    this._modalActive.subscribe((val) => {
      console.log(`Modal New Status ${val}`);
    });
  }

  public openModal(content: Type<ModalContentBase>, context: ModalContext) {
    this.zone.run(() => {
      if (!this._modalActive.value) {
        this.nextModalContext = { content, context };
        this._modalActive.next(true);
      } else {
        this.logModalError(content);
      }
    });
  }

  public openErrorModal(header: string = 'Error', text: string) {
    this.openModal(
      ErrorComponent,
      new ErrorContext(header, text, 'got ya', () => this.close())
    );
  }

  public logModalError(content: Type<ModalContentBase>) {
    console.error(
      `You attempted to open a Modal while another one is already open (opened modal: ${typeof content})`
    );
  }

  public close() {
    this._modalActive.next(false);
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
