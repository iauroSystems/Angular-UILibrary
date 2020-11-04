import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { ProjectDetailsProjectManagerCardComponent } from './project-details-project-manager-card.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ProjectDetailsProjectManagerCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports:  [ProjectDetailsProjectManagerCardComponent]
})
export class ProjectDetailsProjectManagerCardModule { }
