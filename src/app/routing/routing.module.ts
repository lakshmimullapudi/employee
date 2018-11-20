import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{SignComponent} from '../sign/sign.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import{Routes,RouterModule} from '@angular/router';
import{LoginService} from '../dashboard/login.service';

const routes:Routes = [
  {path:'',component:SignComponent},
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
