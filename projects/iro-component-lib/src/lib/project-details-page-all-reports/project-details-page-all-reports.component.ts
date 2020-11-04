import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-details-page-all-reports',
  templateUrl: './project-details-page-all-reports.component.html',
  styleUrls: ['./project-details-page-all-reports.component.scss']
})
export class ProjectDetailsPageAllReportsComponent implements OnInit {

  @Input() reportName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
