import { Employee } from '../../classes/models/back-end-communication/employee';

export abstract class IEmployeeRetriever {
  abstract getSelf(): Promise<Employee>;
}
