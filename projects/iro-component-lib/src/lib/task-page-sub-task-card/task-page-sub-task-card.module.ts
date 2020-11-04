import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { TaskPageSubTaskCardComponent } from './task-page-sub-task-card.component';

import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [TaskPageSubTaskCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports:  [TaskPageSubTaskCardComponent]
})
export class TaskPageSubTaskCardModule { }
