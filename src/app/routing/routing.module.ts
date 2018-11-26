import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import{SignComponent} from '../sign/sign.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import{LoginService} from '../sign/login.service';
import { EmployedetailsComponent } from '../dashboard/employedetails/employedetails.component';
import { UtilizationComponent } from '../dashboard/utilization/utilization.component';
import { ForgotComponent } from '../forgot/forgot.component';

const routes:Routes = [
  {path:"",redirectTo:"sign",pathMatch:"full"},
  {path:'sign',component:SignComponent},
  {path:'forgot password',component:ForgotComponent},
  {path:'dashbord',component:DashboardComponent,canActivate: [ LoginService ],
  children:[
    {path:"",redirectTo:"employees",pathMatch:"full"},
    {path:'employees',component:EmployedetailsComponent},
    {path:'utilization',component:UtilizationComponent}
  ]
},
  {path:'**',component:SignComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }
export const routerElements = [SignComponent,DashboardComponent,EmployedetailsComponent,UtilizationComponent,ForgotComponent]
