import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { TaskPageNumberCardComponent } from './task-page-number-card.component';

import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [TaskPageNumberCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports:  [TaskPageNumberCardComponent]
})
export class TaskPageNumberCardModule { }
