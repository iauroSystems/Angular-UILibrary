import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iro-mat-tooltip',
  templateUrl: './iro-mat-tooltip.component.html',
  styleUrls: ['./iro-mat-tooltip.component.css']
})
export class IroMatTooltipComponent implements OnInit {

  @Input() tooltipMsg: string;
  @Input() tooltipPosition: string;

  constructor() { }

  ngOnInit(): void {
  }

}
