import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CarScannerComponent } from './pages/car-scanner/car-scanner.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Pages } from './shared/classes/pages';

const routes: Routes = [
  { path: Pages.Login, component: LoginComponent },
  { path: Pages.CarScanner, component: CarScannerComponent },
  { path: Pages.Home, component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
