import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import { GenericDataTableComponent } from './generic-data-table.component';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GenericDataTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    BrowserModule, 
    FormsModule,
  ],
  exports:  [GenericDataTableComponent]
})
export class GenericDataTableModule { }
