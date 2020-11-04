import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'observability-reports',
  templateUrl: './observability-reports.component.html',
  styleUrls: ['./observability-reports.component.scss']
})
export class ObservabilityReportsComponent implements OnInit {

  @Input() observabilityTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
