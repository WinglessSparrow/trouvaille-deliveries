import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QRCode } from 'jsqr';
@Component({
  selector: 'car-scanner',
  templateUrl: './car-scanner.component.html',
  styleUrls: ['./car-scanner.component.scss'],
})
export class CarScannerComponent implements OnInit {
  form: FormGroup;

  code: QRCode;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ carId: ['', Validators.required] });
  }

  //TODO check if camera works
  //TODO wire the manual QR Code button
  //TODO some logic to send to the server

  ngOnInit() {}

  async scan() {}

  setQR(code: QRCode) {
    this.code = code;
  }
}
