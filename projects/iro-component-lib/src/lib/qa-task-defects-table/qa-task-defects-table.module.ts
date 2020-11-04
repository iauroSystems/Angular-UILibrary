import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { QaTaskDefectsTableComponent } from './qa-task-defects-table.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [QaTaskDefectsTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports:  [QaTaskDefectsTableComponent]
})
export class QaTaskDefectsTableModule { }
