import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatProgressBarComponent } from './iro-mat-progress-bar.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [IroMatProgressBarComponent],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports:  [IroMatProgressBarComponent]
})
export class IroMatProgressBarModule { }
