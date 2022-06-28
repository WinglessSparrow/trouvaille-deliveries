import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QRCode } from 'jsqr';
import { ScannerPageTemplateComponent } from 'src/app/core/components/scanner-page-template/scanner-page-template.component';
import { DeliveryScanService } from 'src/app/core/services/prod/component-specific/delivery-scan.service';
import { ModalService } from 'src/app/core/services/prod/component-specific/modal.service';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';
import { Pages } from 'src/app/shared/interfaces/enums/pages';

@Component({
  selector: 'delivery-scan',
  templateUrl: './delivery-scan.component.html',
  styleUrls: ['./delivery-scan.component.scss'],
})
export class DeliveryScanComponent implements OnInit {
  @ViewChild(ScannerPageTemplateComponent)
  scannerWrapper: ScannerPageTemplateComponent;

  constructor(
    private router: Router,
    private delScanService: DeliveryScanService,
    private modal: ModalService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.scannerWrapper.scanner.stopScan();
  }

  redirectToDelivery(id: string) {
    const shouldRoute = this.delScanService.handleId(id);

    if (shouldRoute == null) {
      this.scannerWrapper.scanner.startScan();
      this.modal.openErrorModal(
        'Not a valid Delivery ID',
        'Malformed Delivery ID'
      );
    }

    if (shouldRoute) {
      this.router.navigateByUrl(`${Pages.DeliveryInfo}/${id}`);
    } else {
      this.scannerWrapper.scanner.startScan();
    }
  }

  redirectFromCamera(qrCode: QRCode) {
    this.redirectToDelivery(qrCode.data);
  }
}
