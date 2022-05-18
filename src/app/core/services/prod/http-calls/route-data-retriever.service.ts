import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RouteData } from 'src/app/shared/classes/models/back-end-communication/route-data';
import { APIUrls } from 'src/app/shared/classes/utility/api-urls';
import { IGlobalResponseModel } from 'src/app/shared/interfaces/back-end-communication/i-global-response-model';
import { IRouteData } from 'src/app/shared/interfaces/back-end-communication/i-route-data';
import { IRouteRetriever } from 'src/app/shared/interfaces/services-interfaces/i-route-retriever';

@Injectable({
  providedIn: 'root',
})
export class RouteDataRetrieverService extends IRouteRetriever {
  constructor(private http: HttpClient) {
    super();
  }

  retrieveRoute(): Promise<RouteData> {
    return new Promise<RouteData>((resolve) => {
      this.http
        .get<IGlobalResponseModel<IRouteData>>(APIUrls.ROUTES_TOKEN)
        .pipe(map((val) => new RouteData(val.data[0])))
        .subscribe((routeData) => {
          resolve(routeData);
        });
    });
  }
}
