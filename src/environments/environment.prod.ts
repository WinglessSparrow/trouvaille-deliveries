// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { GlobalErrorHandler } from 'src/app/core/error-handling/global-error-handler';
import { HttpLoadingInterceptor } from 'src/app/core/error-handling/http-loading.interceptor';
import { TimeMockService } from 'src/app/core/services/mock/api/time-mock.service';
import { AuthService } from 'src/app/core/services/prod/http-calls/auth.service';
import { CarIdVerificationService } from 'src/app/core/services/prod/http-calls/car-id-verification.service';
import { DeliveryStateManagerService } from 'src/app/core/services/prod/http-calls/delivery-state-manager.service';
import { EmployeeRetrieverService } from 'src/app/core/services/prod/http-calls/employee-retriever.service';
import { RouteDataRetrieverService } from 'src/app/core/services/prod/http-calls/route-data-retriever.service';
import { TimeManagerService } from 'src/app/core/services/prod/http-calls/time-manager.service';
import { IAuthentification } from 'src/app/shared/interfaces/services-interfaces/i-authentification';
import { ICarIdVerification } from 'src/app/shared/interfaces/services-interfaces/i-car-id-verification';
import { IDeliveryStateManager } from 'src/app/shared/interfaces/services-interfaces/i-delivery-state-manager';
import { IEmployeeRetriever } from 'src/app/shared/interfaces/services-interfaces/i-employee-retriever';
import { IRouteRetriever } from 'src/app/shared/interfaces/services-interfaces/i-route-retriever';
import { ITimeManager } from 'src/app/shared/interfaces/services-interfaces/i-time-manager';

export const environment = {
  production: true,
  IOC: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true,
    },
    {
      provide: IEmployeeRetriever,
      useClass: EmployeeRetrieverService,
    },
    {
      provide: ICarIdVerification,
      useClass: CarIdVerificationService,
    },
    {
      provide: IAuthentification,
      useClass: AuthService,
    },
    {
      provide: IDeliveryStateManager,
      useClass: DeliveryStateManagerService,
    },
    {
      provide: ITimeManager,
      useClass: TimeManagerService,
    },
    {
      provide: IRouteRetriever,
      useClass: RouteDataRetrieverService,
    },
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
