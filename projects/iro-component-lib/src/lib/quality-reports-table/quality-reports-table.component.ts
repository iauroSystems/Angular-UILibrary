import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

var ELEMENT_DATA = [];

@Component({
  selector: 'quality-reports-table',
  templateUrl: './quality-reports-table.component.html',
  styleUrls: ['./quality-reports-table.component.scss']
})
export class QualityReportsTableComponent implements OnInit, OnChanges {

  @Input() qualityReportsDataList;
  @Input() qualityReportsColumnList;

  displayedColumns = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {

    let allColumnNames = [];
    for(let column of this.qualityReportsColumnList){
      allColumnNames.push(column.columnName);
    }

    this.displayedColumns = allColumnNames;
    ELEMENT_DATA = this.qualityReportsDataList;          
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  }

}
