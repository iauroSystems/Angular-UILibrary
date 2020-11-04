import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'quality-report-sprint-delivery-card',
  templateUrl: './quality-report-sprint-delivery-card.component.html',
  styleUrls: ['./quality-report-sprint-delivery-card.component.scss']
})
export class QualityReportSprintDeliveryCardComponent implements OnInit {

  @Input() qualityReportSprintDeliveryCardTitle: string;
  @Input() qualityReportSprintDeliveryCardValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
