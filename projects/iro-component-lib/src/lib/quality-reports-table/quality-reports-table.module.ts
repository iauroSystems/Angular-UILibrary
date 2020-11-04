import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { QualityReportsTableComponent } from './quality-reports-table.component';

@NgModule({
  declarations: [QualityReportsTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports:  [QualityReportsTableComponent]
})
export class QualityReportsTableModule { }
