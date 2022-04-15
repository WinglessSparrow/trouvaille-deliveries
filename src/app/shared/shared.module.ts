import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBtnComponent } from './components/input-btn/input-btn.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { TrouLabelComponent } from './components/trou-label/trou-label.component';

@NgModule({
  declarations: [
    InputBtnComponent,
    InputGroupComponent,
    ScannerComponent,
    TrouLabelComponent,
  ],
  imports: [CommonModule],
  exports: [
    InputBtnComponent,
    InputGroupComponent,
    ScannerComponent,
    TrouLabelComponent,
  ],
})
export class SharedModule {}
