import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import{SignComponent} from '../sign/sign.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import{LoginService} from '../sign/login.service';

const routes:Routes = [
  {path:"",redirectTo:"sign",pathMatch:"full"},
  {path:'sign',component:SignComponent},
  {path:'dashbord',component:DashboardComponent,canActivate: [ LoginService ]},
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
export const routerElements = [SignComponent,DashboardComponent]
