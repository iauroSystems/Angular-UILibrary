import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatProgressCircularBarComponent } from './iro-mat-progress-circular-bar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [IroMatProgressCircularBarComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports:  [IroMatProgressCircularBarComponent]
})
export class IroMatProgressCircularBarModule { }
