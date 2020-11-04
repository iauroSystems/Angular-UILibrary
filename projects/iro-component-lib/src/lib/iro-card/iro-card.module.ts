import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroCardComponent } from './iro-card.component';

@NgModule({
  declarations: [IroCardComponent],
  imports: [
    CommonModule,
  ],
  exports:  [IroCardComponent]
})
export class IroCardModule { }
