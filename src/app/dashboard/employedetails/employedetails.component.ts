import { Component, OnInit } from '@angular/core';
import { EmplistService } from '../employedetails/emplist.service';

@Component({
  selector: 'app-employedetails',
  templateUrl: './employedetails.component.html',
  styleUrls: ['./employedetails.component.css']
})
export class EmployedetailsComponent implements OnInit {
  displayedColumns: string[] = ["SI.No", "First Name", "Last Name", "Email Id", "Designation", "Department", "Joined Date", "Details"];
  source;
  constructor(private list: EmplistService) {
  }

  ngOnInit() {
    this.list.listData.subscribe(
      value => this.source = value.employee
    )

  }

}

