import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HomeSummaryComponent } from './components/home-summary/home-summary.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ScannerPageTemplateComponent } from './components/scanner-page-template/scanner-page-template.component';
import { MapViewControlsComponent } from './components/map-view-controls/map-view-controls.component';
import { DeliveryStateViewComponent } from './components/delivery-state-view/delivery-state-view.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    NavigationComponent,
    NavButtonComponent,
    HomeSummaryComponent,
    MapViewComponent,
    MapViewControlsComponent,
    ScannerPageTemplateComponent,
    DeliveryStateViewComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports: [
    AppHeaderComponent,
    NavigationComponent,
    NavButtonComponent,
    HomeSummaryComponent,
    MapViewComponent,
    MapViewControlsComponent,
    ScannerPageTemplateComponent,
    DeliveryStateViewComponent,
  ],
})
export class CoreModule {}
