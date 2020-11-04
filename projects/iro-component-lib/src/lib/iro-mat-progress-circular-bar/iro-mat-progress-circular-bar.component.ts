import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iro-mat-progress-circular-bar',
  templateUrl: './iro-mat-progress-circular-bar.component.html',
  styleUrls: ['./iro-mat-progress-circular-bar.component.css']
})
export class IroMatProgressCircularBarComponent implements OnInit {

  @Input() progressSpinnerMode: string;
  @Input() progressSpinnerValue: string;
  @Input() circularProgressBarColor: string;
  @Input() progressSpinnerTooltip: string;
  @Input() progressSpinnerStrokeWidth: string;

  constructor() { }

  ngOnInit(): void {
  }

}
