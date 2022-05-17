import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { QRCode } from 'jsqr';
import { ScannerPageTemplateComponent } from 'src/app/core/components/scanner-page-template/scanner-page-template.component';
import { ModalService } from 'src/app/core/services/prod/component-specific/modal.service';
import {
  ClearDeliveries,
  InitDeliveriesState,
} from 'src/app/core/state/deliveries/deliveries.action';
import { ClearToken } from 'src/app/core/state/token/token.action';
import { Pages } from 'src/app/shared/interfaces/enums/pages';
import { ICarIdVerification } from 'src/app/shared/interfaces/services-interfaces/i-car-id-verification';
@Component({
  selector: 'car-scanner',
  templateUrl: './car-scanner.component.html',
  styleUrls: ['./car-scanner.component.scss'],
})
export class CarScannerComponent implements OnInit {
  @ViewChild(ScannerPageTemplateComponent, { static: false })
  scannerWrapper: ScannerPageTemplateComponent;

  constructor(
    private router: Router,
    private store: Store,
    private carVerification: ICarIdVerification,
    private modal: ModalService
  ) {}

  ngOnInit() {}

  logOut() {
    //clearing deliveries
    this.store.dispatch([new ClearDeliveries(), new ClearToken()]);

    this.router.navigateByUrl('');
  }

  async receiveCarCode(value: string) {
    if (await this.carVerification.verifyCarId(value)) {
      const subscription = this.store
        .dispatch(new InitDeliveriesState())
        .subscribe(() => {
          this.router.navigateByUrl('/' + Pages.Home);
          subscription.unsubscribe();
        });
    } else {
      this.scannerWrapper.scanner.startScan();
      this.modal.openErrorModal(
        'The Car id is not a valid Car Id',
        'Car Id Error'
      );
    }
  }

  setQRFromCamera(code: QRCode) {
    this.receiveCarCode(code.data);
  }
}
