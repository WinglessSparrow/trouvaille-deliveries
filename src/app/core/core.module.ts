import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrouLabelComponent } from './components/trou-label/trou-label.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { InputBtnComponent } from './input-btn/input-btn.component';

@NgModule({
  declarations: [
    TrouLabelComponent,
    AppHeaderComponent,
    ScannerComponent,
    InputGroupComponent,
    InputBtnComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    TrouLabelComponent,
    ScannerComponent,
    AppHeaderComponent,
    InputGroupComponent,
    InputBtnComponent,
  ],
})
export class CoreModule {}
