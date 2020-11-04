import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatTooltipComponent } from './iro-mat-tooltip.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [IroMatTooltipComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports:  [IroMatTooltipComponent]
})
export class IroMatTooltipModule { }
