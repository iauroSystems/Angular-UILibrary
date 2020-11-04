import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ViewNotesGroupAttachmentTableComponent } from './view-notes-group-attachment-table.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [ViewNotesGroupAttachmentTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    FlexLayoutModule,
    MatTooltipModule
  ],
  exports:  [ViewNotesGroupAttachmentTableComponent]
})
export class ViewNotesGroupAttachmentTableModule { }
