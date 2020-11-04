import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'management-reports-highlights',
  templateUrl: './management-reports-highlights.component.html',
  styleUrls: ['./management-reports-highlights.component.scss']
})
export class ManagementReportsHighlightsComponent implements OnInit {

  @Input() heighLightName: string;
  @Input() heighLightValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
