import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { GlobalErrorHandler } from 'src/app/core/error-handling/global-error-handler';
import { HttpLoadingInterceptor } from 'src/app/core/error-handling/http-loading.interceptor';
import { CarIdVerificationMockService } from 'src/app/core/services/mock/car-id-verification-mock.service';
import { ConnectionMockService } from 'src/app/core/services/mock/connection-mock.service';
import { DeliveriesManagerMockService } from 'src/app/core/services/mock/deliveries-manager-mock.service';
import { MapWaypointsMockService } from 'src/app/core/services/mock/map-waypoints-mock.service';
import { StateManagerMockService } from 'src/app/core/services/mock/state-manager-mock.service';
import { TimeMockService } from 'src/app/core/services/mock/time-mock.service';
import { TokenRefresherMockService } from 'src/app/core/services/mock/token-refresher-mock.service';
import { AuthService } from 'src/app/core/services/prod/http-calls/auth.service';
import { DeliveryManagerService } from 'src/app/core/services/prod/http-calls/delivery-manager.service';
import { CarIdVerificationModel } from 'src/app/shared/classes/car-id-verification-model';
import { AuthentificationServiceModel } from 'src/app/shared/models/authentification-service-model';
import { ConnectionServiceModel } from 'src/app/shared/models/connection-service-model';
import { DeliveriesManagerModel } from 'src/app/shared/models/deliveries-manager-model';
import { MapNodesRetrieverServiceModel } from 'src/app/shared/models/map-node-retriever-service-model';
import { StateManagerModel } from 'src/app/shared/models/state-manager-model';
import { TimeServiceModel } from 'src/app/shared/models/time-service-model';
import { TokenRefresherModel } from 'src/app/shared/models/token-refresher-model';
import { AuthentificationMockService } from 'src/app/shared/services/mock/authentification-mock.service';

export const environment = {
  production: true,
  IOC: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: AuthentificationServiceModel,
      useClass: AuthService,
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
      useClass: DeliveryManagerService,
    },
    {
      provide: TokenRefresherModel,
      useClass: TokenRefresherMockService,
    },
    {
      provide: CarIdVerificationModel,
      useClass: CarIdVerificationMockService,
    },
    {
      provide: StateManagerModel,
      useClass: StateManagerMockService,
    },
    {
      provide: TimeServiceModel,
      useClass: TimeMockService,
    },
    {
      provide: MapNodesRetrieverServiceModel,
      useClass: MapWaypointsMockService,
    },
  ],
};
