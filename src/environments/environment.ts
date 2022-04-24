// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicRouteStrategy } from '@ionic/angular';
import { GlobalErrorHandler } from 'src/app/core/error-handling/global-error-handler';
import { HttpLoadingInterceptor } from 'src/app/core/error-handling/http-loading.interceptor';
import { ConnectionMockService } from 'src/app/core/services/mock/connection-mock.service';
import { AuthentificationServiceModel } from 'src/app/shared/models/authentification-service-model';
import { ConnectionServiceModel } from 'src/app/shared/models/connection-service-model';
import { AuthentificationMockService } from 'src/app/shared/services/mock/authentification-mock.service';
import { DeliveriesManagerModel } from 'src/app/shared/models/deliveries-manager-model';
import { DeliveriesManagerMockService } from 'src/app/core/services/mock/deliveries-manager-mock.service';
import { TokenRefresherModel } from 'src/app/shared/models/token-refresher-model';
import { TokenRefresherMockService } from 'src/app/core/services/mock/token-refresher-mock.service';
import { CarIdVerificationModel } from 'src/app/shared/classes/car-id-verification-model';
import { CarIdVerificationMockService } from 'src/app/core/services/mock/car-id-verification-mock.service';

export const environment = {
  production: false,
  IOC: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: AuthentificationServiceModel,
      useClass: AuthentificationMockService,
    },
    {
      provide: ConnectionServiceModel,
      useClass: ConnectionMockService,
    },
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
      provide: DeliveriesManagerModel,
      useClass: DeliveriesManagerMockService,
    },
    {
      provide: TokenRefresherModel,
      useClass: TokenRefresherMockService,
    },
    {
      provide: CarIdVerificationModel,
      useClass: CarIdVerificationMockService,
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
