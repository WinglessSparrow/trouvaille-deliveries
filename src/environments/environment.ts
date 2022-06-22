import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { GlobalErrorHandler } from 'src/app/core/error-handling/global-error-handler';
import { HttpLoadingInterceptor } from 'src/app/core/error-handling/http-loading.interceptor';
import { CarIdVerificationMockService } from 'src/app/core/services/mock/api/car-id-verification-mock.service';
import { EmployeeRetrieverMockService } from 'src/app/core/services/mock/api/employee-retriever-mock.service';
import { RouteDataRetrieverMockService } from 'src/app/core/services/mock/api/route-data-retriever-mock.service';
import { StateManagerMockService } from 'src/app/core/services/mock/api/state-manager-mock.service';
import { TimeMockService } from 'src/app/core/services/mock/api/time-mock.service';
import { IAuthentification } from 'src/app/shared/interfaces/services-interfaces/i-authentification';
import { ICarIdVerification } from 'src/app/shared/interfaces/services-interfaces/i-car-id-verification';
import { IDeliveryStateManager } from 'src/app/shared/interfaces/services-interfaces/i-delivery-state-manager';
import { IEmployeeRetriever } from 'src/app/shared/interfaces/services-interfaces/i-employee-retriever';
import { IRouteRetriever } from 'src/app/shared/interfaces/services-interfaces/i-route-retriever';
import { ITimeManager } from 'src/app/shared/interfaces/services-interfaces/i-time-manager';
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
    {
      provide: IEmployeeRetriever,
      useClass: EmployeeRetrieverMockService,
    },
    {
      provide: ICarIdVerification,
      useClass: CarIdVerificationMockService,
    },
    {
      provide: IAuthentification,
      useClass: AuthentificationMockService,
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
