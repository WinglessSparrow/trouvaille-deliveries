import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { QRCode } from 'jsqr';
import { Pages } from 'src/app/shared/classes/pages';
import { ScannerComponent } from 'src/app/shared/components/scanner/scanner.component';

@Component({
  selector: 'scanner-page-template',
  templateUrl: './scanner-page-template.component.html',
  styleUrls: ['./scanner-page-template.component.scss'],
})
export class ScannerPageTemplateComponent implements OnInit {
  @ViewChild(ScannerComponent, { static: false }) scanner: ScannerComponent;

  @Input() header = 'header';
  @Input() inputHeader = 'input Header';

  @Output() qrRead: EventEmitter<QRCode> = new EventEmitter<QRCode>();
  @Output() manualInputClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private router: Router) {}

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
      //TODO starts the async service that gets the Data, because the server needs both car and credentials
      this.router.navigateByUrl('/' + Pages.Home);
    } else {
      //TODO SHOW MODAL FOR WRONG INPUT
    }
  }

  setQRFromCamera(code: QRCode) {
    this.receiveCarCode(code.data);
  }
}
