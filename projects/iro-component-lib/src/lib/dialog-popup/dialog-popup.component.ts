import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lib-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {

  popupTitle: any;
  popupList: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private dialogRef: MatDialogRef<DialogPopupComponent>) { 

    this.popupTitle = data.popupTitle;
    this.popupList = data.popupList;

    console.log(this.popupTitle);
    console.log(this.popupList);
  }

  ngOnInit(): void {
  }

}
