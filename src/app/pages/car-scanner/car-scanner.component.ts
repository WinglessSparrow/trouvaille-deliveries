import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QRCode } from 'jsqr';
@Component({
  selector: 'car-scanner',
  templateUrl: './car-scanner.component.html',
  styleUrls: ['./car-scanner.component.scss'],
})
export class CarScannerComponent implements OnInit {
  form: FormGroup;

  code: QRCode;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({ carId: ['', Validators.required] });
  }

  //TODO check if camera works
  //TODO wire the manual QR Code button
  //TODO some logic to send to the server

  ngOnInit() {}

  logOut() {
    this.router.navigateByUrl('/home');
  }

  setQR(code: QRCode) {
    this.code = code;
    //TODO check with the Server for the QR Code to be correct, show error if not correct
    this.router.navigateByUrl('/home');
  }
}
