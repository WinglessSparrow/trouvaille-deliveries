import { IErrorObject } from './i-error-object';

export interface IGlobalResponseModel<T> {
  hasError: boolean;
  error: IErrorObject;
  hasWarnings: boolean;
  warnings: string[];
  data: Array<T>;
}
