import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatCheckboxesComponent } from './iro-mat-checkboxes.component';
import {MatCheckboxModule} from '@angular/material/checkbox'

@NgModule({
  declarations: [IroMatCheckboxesComponent],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports:  [IroMatCheckboxesComponent]
})
export class IroMatCheckboxesModule { }
