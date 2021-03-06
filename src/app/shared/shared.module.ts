import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliveryPreviewComponent } from './components/delivery-preview/delivery-preview.component';
import { InputBtnComponent } from './components/input-btn/input-btn.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { InputTimeIntervalComponent } from './components/input-time-interval/input-time-interval.component';
import { InputTimeComponent } from './components/input-time/input-time.component';
import { ErrorComponent } from './components/modal-views/error/error.component';
import { HttpComponent } from './components/modal-views/http/http.component';
import { LoadingComponent } from './components/modal-views/loading/loading.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { TrouBtnComponent } from './components/trou-btn/trou-btn.component';
import { TrouLabelComponent } from './components/trou-label/trou-label.component';
import { TrouModalComponent } from './components/trou-modal/trou-modal.component';
import { TrouRadioComponent } from './components/trou-radio/trou-radio.component';

@NgModule({
  declarations: [
    InputBtnComponent,
    InputGroupComponent,
    ScannerComponent,
    TrouLabelComponent,
    TrouBtnComponent,
    ErrorComponent,
    LoadingComponent,
    TrouModalComponent,
    DeliveryPreviewComponent,
    TrouRadioComponent,
    InputTimeComponent,
    InputTimeIntervalComponent,
    HttpComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputBtnComponent,
    InputGroupComponent,
    ScannerComponent,
    TrouLabelComponent,
    TrouBtnComponent,
    ErrorComponent,
    LoadingComponent,
    TrouModalComponent,
    DeliveryPreviewComponent,
    TrouRadioComponent,
    InputTimeComponent,
    InputTimeIntervalComponent,
    HttpComponent,
  ],
})
export class SharedModule {}
