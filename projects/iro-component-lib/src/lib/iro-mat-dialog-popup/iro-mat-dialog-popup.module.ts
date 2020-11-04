import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatDialogPopupComponent } from './iro-mat-dialog-popup.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [IroMatDialogPopupComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports:  [IroMatDialogPopupComponent]
})
export class IroMatDialogPopupModule { }
