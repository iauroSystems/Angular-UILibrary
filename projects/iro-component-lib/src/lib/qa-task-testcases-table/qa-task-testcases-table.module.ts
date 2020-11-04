import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { QaTaskTestcasesTableComponent } from './qa-task-testcases-table.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
// import { BrowserModule  } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QaTaskTestcasesTableComponent],
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

  exports:  [QaTaskTestcasesTableComponent]
})
export class QaTaskTestcasesTableModule { }
