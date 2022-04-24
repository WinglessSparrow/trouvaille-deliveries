import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { QRCode } from 'jsqr';
import { ScannerPageTemplateComponent } from 'src/app/core/components/scanner-page-template/scanner-page-template.component';

@Component({
  selector: 'delivery-scan',
  templateUrl: './delivery-scan.component.html',
  styleUrls: ['./delivery-scan.component.scss'],
})
export class DeliveryScanComponent implements OnInit {
  @ViewChild(ScannerPageTemplateComponent)
  scannerWrapper: ScannerPageTemplateComponent;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.scannerWrapper.scanner.stopScan();
  }

  redirectToDelivery(code: string) {
    if (this.verifyCode(code)) {
      //TODO Redirect to delivery scan
    } else {
      //TODO Show error modal
    }
  }

  verifyCode(code: string): boolean {
    //TODO verification

    return true;
  }

  redirectFromCamera(qrCode: QRCode) {
    this.redirectToDelivery(qrCode.data);
  }
}
