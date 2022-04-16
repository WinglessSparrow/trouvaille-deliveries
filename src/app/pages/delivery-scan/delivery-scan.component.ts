import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QRCode } from 'jsqr';

@Component({
  selector: 'delivery-scan',
  templateUrl: './delivery-scan.component.html',
  styleUrls: ['./delivery-scan.component.scss'],
})
export class DeliveryScanComponent implements OnInit {
  constructor(router: Router) {}

  //TODO Delivery path should be done with /delivery/{ID} or smth
  //TODO Maybe query lazyly

  ngOnInit() {}

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
