import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule,MatFormFieldModule,MatInputModule,MatCheckboxModule,MatButtonModule,MatGridListModule,MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  declarations: [],
 
})
export class MaterialModule { }
export const materialComponents = [MatCardModule,MatFormFieldModule,MatInputModule,MatCheckboxModule,MatButtonModule,MatGridListModule,BrowserAnimationsModule,MatTableModule]
