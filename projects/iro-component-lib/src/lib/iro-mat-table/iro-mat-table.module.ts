import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { IroMatTableComponent } from './iro-mat-table.component';
// import { MatTableDataSource } from '@angular/material/table';
// import {MatSort} from '@angular/material/sort';

@NgModule({
  declarations: [IroMatTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    // MatTableDataSource,
    // MatSort
  ],
  exports:  [IroMatTableComponent]
})
export class IroMatTableModule { }
