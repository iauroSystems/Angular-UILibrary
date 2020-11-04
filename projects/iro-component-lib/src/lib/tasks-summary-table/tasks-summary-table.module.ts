import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { TasksSummaryTableComponent } from './tasks-summary-table.component';
// import { MatTableDataSource } from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [TasksSummaryTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatTooltipModule,
    FlexLayoutModule,
    // MatTableDataSource,
  ],
  exports:  [TasksSummaryTableComponent]
})
export class TasksSummaryTableModule { }
