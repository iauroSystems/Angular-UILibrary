import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import { QaReportsSummaryTableComponent } from './qa-reports-summary-table.component';

import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [QaReportsSummaryTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatTooltipModule,
  ],
  exports:  [QaReportsSummaryTableComponent]
})
export class QaReportsSummaryTableModule { }
