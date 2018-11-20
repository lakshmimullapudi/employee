import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class EmplistService {
  baseurl:string = 'https://jsonplaceholder.typicode.com';
  employeedata : any[];
  subject = new Subject();
  constructor(private http:Http) { 
    http.get("assets/employee.json")
    .map((res: Response) => res.json())  
    .subscribe(data => this.employeedata = data);
    // this.subject.next(this.employeedata);
    // console.log(this.subject.next(this.employeedata))

  setTimeout(() => {this.subject.next(this.employeedata)},0);
    
  }
  // this.subject.next(this.employeedata);
}
