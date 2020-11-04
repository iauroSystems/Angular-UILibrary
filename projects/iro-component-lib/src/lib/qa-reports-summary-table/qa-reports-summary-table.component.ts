import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

var ELEMENT_DATA = [];

@Component({
  selector: 'qa-reports-summary-table',
  templateUrl: './qa-reports-summary-table.component.html',
  styleUrls: ['./qa-reports-summary-table.component.scss']
})
export class QaReportsSummaryTableComponent implements OnInit, OnChanges {

  @Input() qaReportSummaryTableDataList;
  @Input() qaReportSummaryTableColumnList;

  displayedColumns = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {

    let allColumnNames = [];
    for(let column of this.qaReportSummaryTableColumnList){
      allColumnNames.push(column.columnName);
    }

    this.displayedColumns = allColumnNames;

    ELEMENT_DATA = this.qaReportSummaryTableDataList;          
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  }

  calculateGrandTotal(columnName){   
    let total = 0;
    for(let column of this.qaReportSummaryTableDataList){
      if(columnName != "Pass" && columnName != "Fail"){
        total = total + parseInt(column[columnName]);
      }
      else{
        total = total + parseInt(column[columnName].value);
      }      
    }
    return total.toString();
  }

}
