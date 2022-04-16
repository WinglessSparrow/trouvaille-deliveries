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
import { MapViewControlsComponent } from './map-view-controls/map-view-controls.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    NavigationComponent,
    NavButtonComponent,
    HomeSummaryComponent,
    MapViewComponent,
    MapViewControlsComponent,
    ScannerPageTemplateComponent,
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
  ],
})
export class CoreModule {}
