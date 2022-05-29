// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { GlobalErrorHandler } from 'src/app/core/error-handling/global-error-handler';
import { HttpLoadingInterceptor } from 'src/app/core/error-handling/http-loading.interceptor';
import { CarIdVerificationMockService } from 'src/app/core/services/mock/api/car-id-verification-mock.service';
import { ConnectionMockService } from 'src/app/core/services/mock/api/connection-mock.service';
import { DeliveriesManagerMockService } from 'src/app/core/services/mock/api/deliveries-manager-mock.service';
import { EmployeeRetrieverMockService } from 'src/app/core/services/mock/api/employee-retriever-mock.service';
import { RouteDataRetrieverMockService } from 'src/app/core/services/mock/api/route-data-retriever-mock.service';
import { StateManagerMockService } from 'src/app/core/services/mock/api/state-manager-mock.service';
import { TimeMockService } from 'src/app/core/services/mock/api/time-mock.service';
import { TokenRefresherMockService } from 'src/app/core/services/mock/api/token-refresher-mock.service';
import { AuthService } from 'src/app/core/services/prod/http-calls/auth.service';
import { CarIdVerificationService } from 'src/app/core/services/prod/http-calls/car-id-verification.service';
import { DeliveryStateManagerService } from 'src/app/core/services/prod/http-calls/delivery-state-manager.service';
import { EmployeeRetrieverService } from 'src/app/core/services/prod/http-calls/employee-retriever.service';
import { RouteDataRetrieverService } from 'src/app/core/services/prod/http-calls/route-data-retriever.service';
import { TimeManagerService } from 'src/app/core/services/prod/http-calls/time-manager.service';
import { IAuthentification } from 'src/app/shared/interfaces/services-interfaces/i-authentification';
import { ICarIdVerification } from 'src/app/shared/interfaces/services-interfaces/i-car-id-verification';
import { IConnection } from 'src/app/shared/interfaces/services-interfaces/i-connection';
import { IDeliveriesManager } from 'src/app/shared/interfaces/services-interfaces/i-deliveries-manager';
import { IDeliveryStateManager } from 'src/app/shared/interfaces/services-interfaces/i-delivery-state-manager';
import { IEmployeeRetriever } from 'src/app/shared/interfaces/services-interfaces/i-employee-retriever';
import { IRouteRetriever } from 'src/app/shared/interfaces/services-interfaces/i-route-retriever';
import { ITimeManager } from 'src/app/shared/interfaces/services-interfaces/i-time-manager';
import { ITokenRefresher } from 'src/app/shared/interfaces/services-interfaces/i-token-refresher';
import { AuthentificationMockService } from 'src/app/shared/services/mock/authentification-mock.service';

export const environment = {
  production: false,
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
    //FIXME implement me, when you know how
    {
      provide: IConnection,
      useClass: ConnectionMockService,
      // useClass: ConnectionService,
    },
    //FIXME implement me, when you know how
    {
      provide: ITokenRefresher,
      useClass: TokenRefresherMockService,
      // useClass: TokenRefresherService,
    },
    {
      provide: IEmployeeRetriever,
      // useClass: EmployeeRetrieverMockService,
      useClass: EmployeeRetrieverService,
    },
    {
      provide: ICarIdVerification,
      // useClass: CarIdVerificationMockService,
      useClass: CarIdVerificationService,
    },
    {
      provide: IAuthentification,
      // useClass: AuthentificationMockService,
      useClass: AuthService,
    },
    {
      provide: IDeliveryStateManager,
      useClass: StateManagerMockService,
      // useClass: DeliveryStateManagerService,
    },
    {
      provide: ITimeManager,
      useClass: TimeMockService,
      // useClass: TimeManagerService,
    },
    {
      provide: IRouteRetriever,
      useClass: RouteDataRetrieverMockService,
      // useClass: RouteDataRetrieverService,
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
