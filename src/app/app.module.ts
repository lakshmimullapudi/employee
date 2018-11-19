import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './dashboard/header/header.component';
import { EmployedetailsComponent } from './dashboard/employedetails/employedetails.component';
import{materialComponents} from './material/material.module';
import{RoutingModule,routerElements} from './routing/routing.module';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployedetailsComponent,
    routerElements,
    SidebarComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    materialComponents,
    RoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
