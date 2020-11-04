import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatToggleButtonsComponent } from './iro-mat-toggle-buttons.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [IroMatToggleButtonsComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],

  exports:  [IroMatToggleButtonsComponent]
})
export class IroMatToggleButtonsModule { }
