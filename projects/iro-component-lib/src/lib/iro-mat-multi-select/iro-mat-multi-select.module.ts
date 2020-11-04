import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatMultiSelectComponent } from './iro-mat-multi-select.component';

import {MatSelectModule} from '@angular/material/select';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [IroMatMultiSelectComponent],

  imports: [
    CommonModule,
    MatSelectModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],

  exports:  [IroMatMultiSelectComponent]
})
export class IroMatMultiSelectModule { }

