import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatRadioButtonsComponent } from './iro-mat-radio-buttons.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [IroMatRadioButtonsComponent],
  imports: [
    CommonModule,
    MatRadioModule
  ],
  exports:  [IroMatRadioButtonsComponent]
})
export class IroMatRadioButtonsModule { }
