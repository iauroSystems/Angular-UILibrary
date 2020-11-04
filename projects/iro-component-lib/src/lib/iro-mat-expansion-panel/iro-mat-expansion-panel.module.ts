import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatExpansionPanelComponent } from './iro-mat-expansion-panel.component';

import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [IroMatExpansionPanelComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ],

  exports:  [IroMatExpansionPanelComponent]
})
export class IroMatExpansionPanelModule { }
