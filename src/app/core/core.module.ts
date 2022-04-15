import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LabelType,
  TrouLabelComponent,
} from '../shared/components/trou-label/trou-label.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ScannerComponent } from '../shared/components/scanner/scanner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputBtnComponent } from '../shared/components/input-btn/input-btn.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { HomeSummaryComponent } from './components/home-summary/home-summary.component';
import { MapViewComponent } from './components/map-view/map-view.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    NavigationComponent,
    NavButtonComponent,
    HomeSummaryComponent,
    MapViewComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    AppHeaderComponent,
    NavigationComponent,
    NavButtonComponent,
    HomeSummaryComponent,
    MapViewComponent,
  ],
})
export class CoreModule {}
