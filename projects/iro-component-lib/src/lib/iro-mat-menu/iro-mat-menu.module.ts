import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatMenuComponent } from './iro-mat-menu.component';
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [IroMatMenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports:  [IroMatMenuComponent]
})
export class IroMatMenuModule { }
