import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AllDeliveriesListComponent } from './pages/all-deliveries-list/all-deliveries-list.component';
import { CarScannerComponent } from './pages/car-scanner/car-scanner.component';
import { DeliveriesListLoadComponent } from './pages/deliveries-list-load/deliveries-list-load.component';
import { DeliveryInfoComponent } from './pages/delivery-info/delivery-info.component';
import { DeliveryScanComponent } from './pages/delivery-scan/delivery-scan.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MapComponent } from './pages/map/map.component';
import { TimeComponent } from './pages/time/time.component';
import { Pages } from './shared/interfaces/enums/pages';

//FIXME AuthGuard ist turned off, for now, do not forget to turn it ON!

const routes: Routes = [
  {
    path: Pages.Login,
    component: LoginComponent,
  },
  {
    path: Pages.CarScanner,
    component: CarScannerComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: Pages.Home,
    component: HomeComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: Pages.DeliveriesToLoad,
    component: DeliveriesListLoadComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: Pages.DeliveryInfo + '/:id',
    component: DeliveryInfoComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: Pages.AllDeliveries,
    component: AllDeliveriesListComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: Pages.ScanDelivery,
    component: DeliveryScanComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: Pages.Time,
    component: TimeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: Pages.Map,
    component: MapComponent,
    //canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
