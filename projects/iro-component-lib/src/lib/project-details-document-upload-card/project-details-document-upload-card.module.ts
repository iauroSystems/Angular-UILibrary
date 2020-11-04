import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { ProjectDetailsDocumentUploadCardComponent } from './project-details-document-upload-card.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ProjectDetailsDocumentUploadCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports:  [ProjectDetailsDocumentUploadCardComponent]
})
export class ProjectDetailsDocumentUploadCardModule { }
