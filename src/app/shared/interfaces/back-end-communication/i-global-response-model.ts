import { ErrorObject } from '../../classes/models/back-end-communication/error-object';

export interface IGlobalResponseModel<T> {
  hasError: boolean;
  error: ErrorObject;
  hasWarnings: boolean;
  warnings: string[];
  data: Array<T>;
}
