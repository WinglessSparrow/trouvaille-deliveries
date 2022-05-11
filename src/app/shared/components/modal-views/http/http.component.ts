import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/prod/modal.service';
import { HttpModalContext } from 'src/app/shared/classes/modal-contexts/http-context';
import { ModalContentBase } from 'src/app/shared/models/components/modal-content-base.component';
import { ModalContext } from 'src/app/shared/models/data-models/modal-context';

@Component({
  selector: 'http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent extends ModalContentBase implements OnInit {
  context: HttpModalContext;

  constructor(private modal: ModalService) {
    super();
  }

  closeModal() {
    this.modal.close();
  }

  retry() {
    this.modal.close();
    //Will prbly never be implemented, but it's the thought that counts
  }

  setContext(context: ModalContext) {
    if (context instanceof HttpModalContext) {
      this.context = context;
    } else {
      console.error(
        `Wrong Context Type in Http Component (${typeof context} instead of HttpContext)`
      );
    }
  }

  ngOnInit() {}
}
