import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task-page-number-card',
  templateUrl: './task-page-number-card.component.html',
  styleUrls: ['./task-page-number-card.component.scss']
})
export class TaskPageNumberCardComponent implements OnInit {

  @Input() taskPageNumberCardName: string;
  @Input() taskPageNumberCardValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
