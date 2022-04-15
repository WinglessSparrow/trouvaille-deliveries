import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CarScannerComponent } from './car-scanner/car-scanner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home/home.component';
import { TimeComponent } from './time/time.component';
import { DeliveriesListLoadComponent } from './deliveries-list-load/deliveries-list-load.component';
import { DeliveryScanComponent } from './delivery-scan/delivery-scan.component';
import { AllDeliveriesListComponent } from './all-deliveries-list/all-deliveries-list.component';
import { MapComponent } from './map/map.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    CarScannerComponent,
    HomeComponent,
    TimeComponent,
    DeliveriesListLoadComponent,
    DeliveryScanComponent,
    AllDeliveriesListComponent,
    MapComponent,
    DeliveryInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
  ],
  exports: [
    LoginComponent,
    CarScannerComponent,
    HomeComponent,
    TimeComponent,
    DeliveriesListLoadComponent,
    DeliveryScanComponent,
    AllDeliveriesListComponent,
    MapComponent,
    DeliveryInfoComponent,
  ],
})
export class PagesModule {}
