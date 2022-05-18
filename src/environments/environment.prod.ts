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
import { MapWaypointsMockService } from 'src/app/core/services/mock/api/map-waypoints-mock.service';
import { StateManagerMockService } from 'src/app/core/services/mock/api/state-manager-mock.service';
import { TimeMockService } from 'src/app/core/services/mock/api/time-mock.service';
import { TokenRefresherMockService } from 'src/app/core/services/mock/api/token-refresher-mock.service';
import { AuthService } from 'src/app/core/services/prod/http-calls/auth.service';
import { RouteDataRetrieverService } from 'src/app/core/services/prod/http-calls/route-data-retriever.service';
import { IAuthentification } from 'src/app/shared/interfaces/services-interfaces/i-authentification';
import { ICarIdVerification } from 'src/app/shared/interfaces/services-interfaces/i-car-id-verification';
import { IConnection } from 'src/app/shared/interfaces/services-interfaces/i-connection';
import { IDeliveriesManager } from 'src/app/shared/interfaces/services-interfaces/i-deliveries-manager';
import { IMapNodesRetriever } from 'src/app/shared/interfaces/services-interfaces/i-map-node-retriever';
import { IRouteRetriever } from 'src/app/shared/interfaces/services-interfaces/i-route-retriever';
import { IStateManager } from 'src/app/shared/interfaces/services-interfaces/i-state-manager';
import { ITimeManager } from 'src/app/shared/interfaces/services-interfaces/i-time-manager';
import { ITokenRefresher } from 'src/app/shared/interfaces/services-interfaces/i-token-refresher';

export const environment = {
  production: true,
  IOC: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: IAuthentification,
      // useClass: AuthentificationMockService,
      useClass: AuthService,
    },
    {
      provide: IConnection,
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
      provide: IDeliveriesManager,
      useClass: DeliveriesManagerMockService,
      // useClass: DeliveryManagerService,
    },
    {
      provide: ITokenRefresher,
      useClass: TokenRefresherMockService,
    },
    {
      provide: ICarIdVerification,
      useClass: CarIdVerificationMockService,
    },
    {
      provide: IStateManager,
      useClass: StateManagerMockService,
    },
    {
      provide: ITimeManager,
      useClass: TimeMockService,
    },
    {
      provide: IMapNodesRetriever,
      useClass: MapWaypointsMockService,
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
