import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { QualityReportCardsComponent } from './quality-report-cards.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [QualityReportCardsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports:  [QualityReportCardsComponent]
})
export class QualityReportCardsModule { }
