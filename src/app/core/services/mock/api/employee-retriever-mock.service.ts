import { Injectable } from '@angular/core';
import { Employee } from 'src/app/shared/classes/models/back-end-communication/employee';
import { IEmployeeRetriever } from 'src/app/shared/interfaces/services-interfaces/i-employee-retriever';

@Injectable({
  providedIn: 'root',
})
export class EmployeeRetrieverMockService extends IEmployeeRetriever {
  constructor() {
    super();
  }

  getSelf(): Promise<Employee> {
    return new Promise<Employee>((resolve) =>
      setTimeout(() => {
        resolve(
          new Employee({
            birthday: '12/12/2012',
            firstname: 'Peter',
            lastname: 'Peterson',
            idemployee: '1',
          })
        );
      }, 300)
    );
  }
}
