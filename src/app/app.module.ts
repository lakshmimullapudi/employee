import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import{RoutingModule,routerElements} from './routing/routing.module';
import{HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { EmployedetailsComponent } from './dashboard/employedetails/employedetails.component';
import{materialComponents} from './material/material.module';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ThumbnailsComponent } from './dashboard/thumbnails/thumbnails.component';
import{LoginService} from './sign/login.service';
import{EmplistService} from './dashboard/employedetails/emplist.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployedetailsComponent,
    routerElements,
    SidebarComponent,
    ThumbnailsComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    materialComponents,
    RoutingModule,
    HttpModule
    
  ],
  providers: [LoginService,EmplistService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
