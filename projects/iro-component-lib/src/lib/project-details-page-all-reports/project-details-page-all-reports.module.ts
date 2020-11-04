import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { ProjectDetailsPageAllReportsComponent } from './project-details-page-all-reports.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ProjectDetailsPageAllReportsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports:  [ProjectDetailsPageAllReportsComponent]
})
export class ProjectDetailsPageAllReportsModule { }
