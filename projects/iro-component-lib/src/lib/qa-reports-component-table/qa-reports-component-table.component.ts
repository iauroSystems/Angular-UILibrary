import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

var ELEMENT_DATA = [];


@Component({
  selector: 'qa-reports-component-table',
  templateUrl: './qa-reports-component-table.component.html',
  styleUrls: ['./qa-reports-component-table.component.scss']
})
export class QaReportsComponentTableComponent implements OnInit, OnChanges {

  @Input() qaReportsComponentTableDataList;
  @Input() qaReportsComponentTableColumnList;

  displayedColumns = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {

    console.log(this.qaReportsComponentTableColumnList);
    console.log(this.qaReportsComponentTableDataList);    

    let allColumnNames = [];
    for(let column of this.qaReportsComponentTableColumnList){
      allColumnNames.push(column.columnName);
    }

    this.displayedColumns = allColumnNames;
    ELEMENT_DATA = this.qaReportsComponentTableDataList;          
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  }

  calculateGrandTotal1(columnName){   
    let total = 0;
    for(let column of this.qaReportsComponentTableDataList){
      total = total + parseInt(column[columnName]);
    }
    return total.toString();
  }

}
