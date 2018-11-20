import { Component, OnInit } from '@angular/core';
import { LoginService } from '../dashboard/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private log: LoginService, private router: Router) {

  }
  ngOnInit() {
  }

//   isLoggedIn() {
//     if (this.log.userName === "" && this.log.userPass === "") {
//       this.router.navigate(["/"]);
//     }
//     else {
//       this.router.navigate(["/dashboard"]);
//     }
//   }
}
