import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QRCode } from 'jsqr';
import { ScannerPageTemplateComponent } from 'src/app/core/components/scanner-page-template/scanner-page-template.component';
import { DeliveryScanService } from 'src/app/core/services/prod/delivery-scan.service';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { Pages } from 'src/app/shared/classes/pages';

@Component({
  selector: 'delivery-scan',
  templateUrl: './delivery-scan.component.html',
  styleUrls: ['./delivery-scan.component.scss'],
})
export class DeliveryScanComponent implements OnInit {
  @ViewChild(ScannerPageTemplateComponent)
  scannerWrapper: ScannerPageTemplateComponent;
  private delivery: Delivery;

  constructor(
    private router: Router,
    private delScanService: DeliveryScanService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.scannerWrapper.scanner.stopScan();
  }

  redirectToDelivery(id: string) {
    const shouldRoute = this.delScanService.handleId(id);

    if (shouldRoute == null) {
      this.scannerWrapper.scanner.startScan();
      throw Error('The code is not a valid Delivery ID');
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
