import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import{DashboardComponent} from '../dashboard/dashboard.component';
@Injectable()
export class LoginService implements CanActivate{
  userName:string;
  userPass:string;
  constructor(private router:Router) {
   }
  logging(signvalues){
    this.userName = signvalues.value.firstName;
    this.userPass = signvalues.value.password;
  }
  canActivate() {
    if (this.userName == undefined && this.userPass == undefined) {
      this.router.navigate(["/"]);
      return false;
    }
    else {
      return true;
    }
  }
  }

