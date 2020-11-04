import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroComponentLibComponent } from './iro-component-lib.component';

import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';


@NgModule({
  declarations: [IroComponentLibComponent, DialogPopupComponent],
  imports: [
    CommonModule,
  ],
  exports: [IroComponentLibComponent]
})
export class IroComponentLibModule { }
