import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iro-mat-progress-bar',
  templateUrl: './iro-mat-progress-bar.component.html',
  styleUrls: ['./iro-mat-progress-bar.component.css']
})
export class IroMatProgressBarComponent implements OnInit {

  @Input() progressBarMode: string;
  @Input() progressBarValue: string;
  @Input() progressBarBufferValue: string;
  @Input() progressBarColor: string;
  @Input() progressBarwidth: string;

  constructor() { }

  ngOnInit(): void {
  }

}
