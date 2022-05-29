import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeState } from 'src/app/core/store/employee/employee.state';
import { Employee } from 'src/app/shared/classes/models/back-end-communication/employee';
import {
  LabelPosition,
  LabelType,
} from 'src/app/shared/components/trou-label/trou-label.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Select(EmployeeState.getEmployee) public employee$: Observable<Employee>;

  public positions = LabelPosition;
  public labelTypes = LabelType;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  back() {
    this.router.navigateByUrl('/carScanner');
  }

  reportProblem() {
    this.http.get('https://httpstat.us/404?sleep=2000').toPromise();
  }
}
