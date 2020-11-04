import { Component, OnInit, Input } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {DialogPopupComponent} from '../dialog-popup/dialog-popup.component';

@Component({
  selector: 'iro-mat-dialog-popup',
  templateUrl: './iro-mat-dialog-popup.component.html',
  styleUrls: ['./iro-mat-dialog-popup.component.css']
})
export class IroMatDialogPopupComponent implements OnInit {

  @Input() icon: string;
  @Input() popupTitle: string;
  @Input() popupList;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(event) {
    const dialogRef = this.dialog.open(DialogPopupComponent , {width:'220px', position:{top: (event.y - 170) +'px', left: (event.x + 80)+'px'}, data: {popupTitle:this.popupTitle, popupList:this.popupList }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
