import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroInputComponent } from './iro-input.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IroInputComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports:  [IroInputComponent]
})
export class IroInputModule { }
