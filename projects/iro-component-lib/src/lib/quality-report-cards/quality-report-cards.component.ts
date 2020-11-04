import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'quality-report-cards',
  templateUrl: './quality-report-cards.component.html',
  styleUrls: ['./quality-report-cards.component.scss']
})
export class QualityReportCardsComponent implements OnInit {

  @Input() qualityTitle: string;
  @Input() qualityValue: string;
  @Input() qualityStatus: string;

  constructor() { }

  ngOnInit(): void {
  }

}
