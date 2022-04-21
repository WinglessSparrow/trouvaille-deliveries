import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ErrorComponent } from './components/error/error.component';
import { InputBtnComponent } from './components/input-btn/input-btn.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PackagePreviewComponent } from './components/package-preview/package-preview.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { TrouBtnComponent } from './components/trou-btn/trou-btn.component';
import { TrouLabelComponent } from './components/trou-label/trou-label.component';
import { TrouModalComponent } from './components/trou-modal/trou-modal.component';

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
    PackagePreviewComponent,
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
    PackagePreviewComponent,
  ],
})
export class SharedModule {}
