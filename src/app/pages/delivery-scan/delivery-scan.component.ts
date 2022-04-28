import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
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

  redirectToDelivery(code: string) {
    this.delScanService.handleId(code);
  }

  redirectFromCamera(qrCode: QRCode) {
    this.redirectToDelivery(qrCode.data);
  }
}
