import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMatSnackbarComponent } from './iro-mat-snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@NgModule({
  declarations: [IroMatSnackbarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  exports:  [IroMatSnackbarComponent]
})
export class IroMatSnackbarModule { }
