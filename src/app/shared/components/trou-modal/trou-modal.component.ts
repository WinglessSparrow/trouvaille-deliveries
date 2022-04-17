import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ComponentRef,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/core/services/prod/modal.service';

import { ModalContentBase } from '../../models/components/modal-content-base.component';
import { ModalContext } from '../../models/data-models/modal-context';

export enum ModalType {
  error,
  loading,
}

@Component({
  selector: 'trou-modal',
  templateUrl: './trou-modal.component.html',
  styleUrls: ['./trou-modal.component.scss'],
  animations: [
    //TODO Move animations... somewhere
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(+100%)' })),
      ]),
    ]),
  ],
})
export class TrouModalComponent implements OnInit {
  @ViewChild('modalContent', { read: ViewContainerRef })
  viewContainer: ViewContainerRef;
  modalContentRef: ComponentRef<ModalContentBase>;

  modalOpen$: Observable<boolean> = new Observable();

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    this.modalService.modal = this;
    this.modalOpen$ = this.modalService.modalActive;
  }

  setContent(content: Type<ModalContentBase>, context: ModalContext) {
    this.modalContentRef = this.viewContainer.createComponent(content);
    this.modalContentRef.instance.setContext(context);
  }

  ngAfterViewInit() {}

  ngOnDestroy(): void {
    this.modalContentRef.destroy();
  }

  changeHidden() {
    //TODO animation from here or smth;
  }
}
