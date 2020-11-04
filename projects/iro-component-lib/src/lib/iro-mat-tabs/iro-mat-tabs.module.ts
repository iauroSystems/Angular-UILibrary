import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatTabsComponent } from './iro-mat-tabs.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [IroMatTabsComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports:  [IroMatTabsComponent]
})
export class IroMatTabsModule { }
