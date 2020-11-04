import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { ProjectDetailsProjectCardComponent } from './project-details-project-card.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ProjectDetailsProjectCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  exports:  [ProjectDetailsProjectCardComponent]
})
export class ProjectDetailsProjectCardModule { }
