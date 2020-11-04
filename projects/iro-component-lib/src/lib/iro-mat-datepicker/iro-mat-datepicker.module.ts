import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatDatepickerComponent } from './iro-mat-datepicker.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [IroMatDatepickerComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule
  ],
  exports:  [IroMatDatepickerComponent]
})
export class IroMatDatepickerModule { }
