import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Employee } from 'src/app/shared/classes/models/back-end-communication/employee';
import { APIUrls } from 'src/app/shared/classes/utility/api-urls';
import { IEmployee } from 'src/app/shared/interfaces/back-end-communication/i-employee';
import { IGlobalResponseModel } from 'src/app/shared/interfaces/back-end-communication/i-global-response-model';
import { IEmployeeRetriever } from 'src/app/shared/interfaces/services-interfaces/i-employee-retriever';

@Injectable({
  providedIn: 'root',
})
export class EmployeeRetrieverService extends IEmployeeRetriever {
  constructor(private http: HttpClient) {
    super();
  }

  getSelf(): Promise<Employee> {
    return new Promise<Employee>((resolve) => {
      this.http
        .get<IGlobalResponseModel<IEmployee>>(APIUrls.EMPLOYEE)
        .pipe(map((val) => new Employee(val.data[0])))
        .subscribe((val) => resolve(val));
    });
  }
}
