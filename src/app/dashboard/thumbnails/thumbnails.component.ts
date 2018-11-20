import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent implements OnInit {
cards:any[] = [
  {image:"assets/Shadow Employee.svg",colour:"#8359FF",emp:"Shadow Employee",num:"08"},
  {image:"assets/Employee on Bench.svg",colour:"#00D98F",emp:"Employee on Bench",num:"43"},
  {image:"assets/Non Billable Employee.svg",colour:"#008EFF",emp:"Non Billable Employee",num:"21"},
  {image:"assets/Total Employees.svg",colour:"#FFAD00",emp:"Total Employees",num:"155"}
]
  constructor() { }

  ngOnInit() {
  }

}
