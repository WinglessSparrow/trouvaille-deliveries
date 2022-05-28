import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { immerable } from 'immer';
import { Employee } from 'src/app/shared/classes/models/back-end-communication/employee';
import { IEmployeeRetriever } from 'src/app/shared/interfaces/services-interfaces/i-employee-retriever';
import { InitEmployee } from './employee.action';

export class EmployeeStateModel {
  [immerable] = true;

  employee: Employee;
}

@State<EmployeeStateModel>({
  name: 'employee',
  defaults: {
    [immerable]: true,
    employee: null,
  },
})
@Injectable()
export class EmployeeState {
  constructor(private employeeRetriever: IEmployeeRetriever) {}

  @Selector()
  static getEmployee(state: EmployeeStateModel) {
    return state.employee;
  }

  @Action(InitEmployee)
  async initEmployee({ setState }: StateContext<EmployeeStateModel>) {
    let nextState: EmployeeStateModel = new EmployeeStateModel();

    nextState.employee = await this.employeeRetriever.getSelf();

    setState(nextState);
  }
}
