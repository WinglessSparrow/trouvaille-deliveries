import { RouteData } from '../../classes/models/back-end-communication/route-data';

export abstract class IRouteRetriever {
  abstract retrieveRoute(): Promise<RouteData>;
}
