import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
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
export const materialComponents = [MatCardModule,MatFormFieldModule,MatInputModule,MatCheckboxModule,MatButtonModule,MatGridListModule,BrowserAnimationsModule,MatTableModule,MatTooltipModule]
