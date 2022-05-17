import { Injectable } from '@angular/core';
import { ModalService } from 'src/app/core/services/prod/component-specific/modal.service';
import { LoadingContext } from '../classes/modal-contexts/loading-context';
import { LoadingComponent } from '../components/modal-views/loading/loading.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private modalService: ModalService) {}

  public startLoading(loadingName: string) {
    this.modalService.openModal(
      LoadingComponent,
      new LoadingContext(loadingName)
    );
  }

  public stopLoading() {
    this.modalService.close();
  }
}
