import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EmplistService {
  listData;
  employeedata;
  constructor(private http: Http) {
    this.listData = http.get("assets/employees.json")
      .map((res: Response) => res.json());

  }
}
