import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'task-page-sub-task-card',
  templateUrl: './task-page-sub-task-card.component.html',
  styleUrls: ['./task-page-sub-task-card.component.scss']
})
export class TaskPageSubTaskCardComponent implements OnInit, OnChanges {

  @Input() taskPageSubTaskCardId: string;
  @Input() taskPageSubTaskCardDate: string;
  @Input() taskPageSubTaskCardName: string;
  @Input() taskPageSubTaskCardUserPhoto: string;
  @Input() taskPageSubTaskCardType: string;
  @Input() taskPageSubTaskCardDateOrange: string;

  constructor() { }

  ngOnChanges(): void {
    this.setSubTaskCard();
  }

  ngOnInit(): void {
  }

  setSubTaskCard(){
    this.taskPageSubTaskCardId = this.taskPageSubTaskCardId;
    this.taskPageSubTaskCardDate = this.taskPageSubTaskCardDate;
    this.taskPageSubTaskCardName = this.taskPageSubTaskCardName;
    this.taskPageSubTaskCardUserPhoto = this.taskPageSubTaskCardUserPhoto;
    this.taskPageSubTaskCardType = this.taskPageSubTaskCardType;
    this.taskPageSubTaskCardDateOrange = this.taskPageSubTaskCardDateOrange;
  }

}
