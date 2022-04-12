import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QRCode } from 'jsqr';
import { Pages } from 'src/app/shared/classes/pages';
@Component({
  selector: 'car-scanner',
  templateUrl: './car-scanner.component.html',
  styleUrls: ['./car-scanner.component.scss'],
})
export class CarScannerComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({ carId: ['', Validators.required] });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    //TODO check if camera works
    //TODO SHOW MODAL IF NOT
  }

  logOut() {
    //TODO logOut resets Token, Car Id, ?Session? etc.
    this.router.navigateByUrl('');
  }

  verifyCarCode(code: string): boolean {
    //TODO TEMP JUST RETURNS TRUE -> REDO WITH SERVICE CALL AND SHIT
    return true;
  }

  receiveCarCode(value: string) {
    if (this.verifyCarCode(value)) {
      this.router.navigateByUrl('/' + Pages.Home);
    } else {
      //TODO SHOW MODAL FOR WRONG INPUT
    }
  }

  setQRFromCamera(code: QRCode) {
    this.receiveCarCode(code.data);
  }
}
