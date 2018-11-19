import { Component, OnInit } from '@angular/core';
// import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-employedetails',
  templateUrl: './employedetails.component.html',
  styleUrls: ['./employedetails.component.css']
})
export class EmployedetailsComponent implements OnInit {
data = ["name","origin"];
source = table_data;
  constructor() { }

  ngOnInit() {
  }

}


const table_data =[{name:"sravya",origin:"angular"},
{name:"krishna",origin:"react"},
{name:"damodar",origin:"ext"},
{name:"rohit",origin:"node"},
{name:"sushant",origin:"java"}
]