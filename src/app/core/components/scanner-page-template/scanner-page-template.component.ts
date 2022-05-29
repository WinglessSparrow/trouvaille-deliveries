import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { QRCode } from 'jsqr';
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

  constructor() {}

  ngOnInit() {}
}
