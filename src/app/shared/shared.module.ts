import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBtnComponent } from './components/input-btn/input-btn.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { TrouLabelComponent } from './components/trou-label/trou-label.component';
import { TrouBtnComponent } from './components/trou-btn/trou-btn.component';

@NgModule({
  declarations: [
    InputBtnComponent,
    InputGroupComponent,
    ScannerComponent,
    TrouLabelComponent,
    TrouBtnComponent,
  ],
  imports: [CommonModule],
  exports: [
    InputBtnComponent,
    InputGroupComponent,
    ScannerComponent,
    TrouLabelComponent,
    TrouBtnComponent,
  ],
})
export class SharedModule {}
