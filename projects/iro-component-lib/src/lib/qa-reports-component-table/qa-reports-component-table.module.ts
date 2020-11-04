import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { QaReportsComponentTableComponent } from './qa-reports-component-table.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [QaReportsComponentTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],

  exports:  [QaReportsComponentTableComponent]
})
export class QaReportsComponentTableModule { }
