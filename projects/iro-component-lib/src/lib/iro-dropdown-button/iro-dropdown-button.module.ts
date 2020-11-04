import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { IroDropdownButtonComponent } from './iro-dropdown-button.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [IroDropdownButtonComponent],
  imports: [
    CommonModule,
    MatSelectModule
  ],
    schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],

  exports:  [IroDropdownButtonComponent]
})
export class IroDropdownButtonModule { }
