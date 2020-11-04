import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import { ReleaseManagementTableComponent } from './release-management-table.component';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [ReleaseManagementTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  exports:  [ReleaseManagementTableComponent]
})
export class ReleaseManagementTableModule { }
