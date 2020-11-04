import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { QualityReportSprintDeliveryCardComponent } from './quality-report-sprint-delivery-card.component';

import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [QualityReportSprintDeliveryCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports:  [QualityReportSprintDeliveryCardComponent]
})
export class QualityReportSprintDeliveryCardModule { }
