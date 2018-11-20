import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './dashboard/header/header.component';
import { EmployedetailsComponent } from './dashboard/employedetails/employedetails.component';
import{materialComponents} from './material/material.module';
import{RoutingModule,routerElements} from './routing/routing.module';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import{LoginService} from './dashboard/login.service';
import{EmplistService} from './dashboard/employedetails/emplist.service';
import{HttpModule} from '@angular/http';
import { ThumbnailsComponent } from './dashboard/thumbnails/thumbnails.component';
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
