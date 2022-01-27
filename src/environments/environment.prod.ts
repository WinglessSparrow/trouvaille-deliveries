import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';

export const environment = {
  production: true,
  IOC: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
};
