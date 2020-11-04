import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { IroButtonComponent } from './iro-button.component';

@NgModule({
  declarations: [IroButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:  [IroButtonComponent]
})
export class IroButtonModule { }
