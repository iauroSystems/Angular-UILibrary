import { Component, OnInit, Input } from '@angular/core';

import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'iro-mat-snackbar',
  templateUrl: './iro-mat-snackbar.component.html',
  styleUrls: ['./iro-mat-snackbar.component.css']
})
export class IroMatSnackbarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  @Input() snackBarMsg: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  @Input() horizontalSnackbarPosition: MatSnackBarHorizontalPosition;
  @Input() verticalSnackbarPosition: MatSnackBarVerticalPosition;

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,      
    });
  }


}
