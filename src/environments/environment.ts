// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { GlobalErrorHandler } from 'src/app/core/error-handling/global-error-handler';
import { HttpLoadingInterceptor } from 'src/app/core/error-handling/http-loading.interceptor';
import { ConnectionMockService } from 'src/app/core/services/mock/api/connection-mock.service';
import { EmployeeRetrieverMockService } from 'src/app/core/services/mock/api/employee-retriever-mock.service';
import { RouteDataRetrieverMockService } from 'src/app/core/services/mock/api/route-data-retriever-mock.service';
import { StateManagerMockService } from 'src/app/core/services/mock/api/state-manager-mock.service';
import { TimeMockService } from 'src/app/core/services/mock/api/time-mock.service';
import { TokenRefresherMockService } from 'src/app/core/services/mock/api/token-refresher-mock.service';
import { AuthService } from 'src/app/core/services/prod/http-calls/auth.service';
import { CarIdVerificationService } from 'src/app/core/services/prod/http-calls/car-id-verification.service';
import { IAuthentification } from 'src/app/shared/interfaces/services-interfaces/i-authentification';
import { ICarIdVerification } from 'src/app/shared/interfaces/services-interfaces/i-car-id-verification';
import { IConnection } from 'src/app/shared/interfaces/services-interfaces/i-connection';
import { IDeliveryStateManager } from 'src/app/shared/interfaces/services-interfaces/i-delivery-state-manager';
import { IEmployeeRetriever } from 'src/app/shared/interfaces/services-interfaces/i-employee-retriever';
import { IRouteRetriever } from 'src/app/shared/interfaces/services-interfaces/i-route-retriever';
import { ITimeManager } from 'src/app/shared/interfaces/services-interfaces/i-time-manager';
import { ITokenRefresher } from 'src/app/shared/interfaces/services-interfaces/i-token-refresher';

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
    {
      provide: IConnection,
      useClass: ConnectionMockService,
    },
    {
      provide: ITokenRefresher,
      useClass: TokenRefresherMockService,
    },
    {
      provide: IEmployeeRetriever,
      useClass: EmployeeRetrieverMockService,
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
      useClass: StateManagerMockService,
    },
    {
      provide: ITimeManager,
      useClass: TimeMockService,
    },
    {
      provide: IRouteRetriever,
      useClass: RouteDataRetrieverMockService,
    },
  ],
};
