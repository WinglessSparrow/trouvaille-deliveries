import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CarScannerComponent } from './car-scanner/car-scanner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LoginComponent, CarScannerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CoreModule],
})
export class PagesModule {}
