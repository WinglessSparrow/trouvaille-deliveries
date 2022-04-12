import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LabelType,
  TrouLabelComponent,
} from './components/trou-label/trou-label.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { InputBtnComponent } from './components/input-btn/input-btn.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { HomeSummaryComponent } from './components/home-summary/home-summary.component';

@NgModule({
  declarations: [
    TrouLabelComponent,
    AppHeaderComponent,
    ScannerComponent,
    InputGroupComponent,
    InputBtnComponent,
    NavigationComponent,
    NavButtonComponent,
    HomeSummaryComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    TrouLabelComponent,
    ScannerComponent,
    AppHeaderComponent,
    InputGroupComponent,
    InputBtnComponent,
    NavigationComponent,
    NavButtonComponent,
    HomeSummaryComponent,
  ],
})
export class CoreModule {}
