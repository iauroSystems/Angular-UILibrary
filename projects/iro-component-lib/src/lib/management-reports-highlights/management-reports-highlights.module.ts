import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { ManagementReportsHighlightsComponent } from './management-reports-highlights.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ManagementReportsHighlightsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports:  [ManagementReportsHighlightsComponent]
})
export class ManagementReportsHighlightsModule { }
