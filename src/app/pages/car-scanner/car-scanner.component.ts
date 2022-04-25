import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { QRCode } from 'jsqr';
import { ScannerPageTemplateComponent } from 'src/app/core/components/scanner-page-template/scanner-page-template.component';
import {
  ClearDeliveries,
  InitDeliveriesState,
} from 'src/app/core/state/deliveries/deliveries.action';
import { ClearToken } from 'src/app/core/state/token/token.action';
import { CarIdVerificationModel } from 'src/app/shared/classes/car-id-verification-model';
import { Pages } from 'src/app/shared/classes/pages';
import { ScannerComponent } from 'src/app/shared/components/scanner/scanner.component';
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
    private carVerification: CarIdVerificationModel
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.scannerWrapper.scanner.stopScan();
  }

  ngAfterViewInit() {
    //TODO check if camera works
  }

  logOut() {
    //clearing deliveries
    this.store.dispatch([new ClearDeliveries(), new ClearToken()]);

    this.router.navigateByUrl('');
  }

  async receiveCarCode(value: string) {
    if (await this.carVerification.verifyCarId(value)) {
      this.store.dispatch(new InitDeliveriesState()).subscribe(() => {
        this.router.navigateByUrl('/' + Pages.Home);
      });
    } else {
      throw Error('The Code is not a Valid Car-ID');
    }
  }

  setQRFromCamera(code: QRCode) {
    this.receiveCarCode(code.data);
  }
}
