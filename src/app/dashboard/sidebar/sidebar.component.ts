import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  board:boolean = true;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  dashboard(){
   this.board = !this.board;
  }
  
}
