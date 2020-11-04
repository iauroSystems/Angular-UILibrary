import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { ObservabilityReportsComponent } from './observability-reports.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ObservabilityReportsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports:  [ObservabilityReportsComponent]
})
export class ObservabilityReportsModule { }
