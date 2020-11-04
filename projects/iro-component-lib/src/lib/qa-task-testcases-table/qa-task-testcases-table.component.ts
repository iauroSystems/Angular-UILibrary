import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

var ELEMENT_DATA = [];


@Component({
  selector: 'qa-task-testcases-table',
  templateUrl: './qa-task-testcases-table.component.html',
  styleUrls: ['./qa-task-testcases-table.component.scss']
})
export class QaTaskTestcasesTableComponent implements OnInit, OnChanges {

  @Input() qaTasksTestcasesTableDataList;
  @Input() qaTasksTestcasesTableColumnList;
  testCaseStatusList = ['Pass', 'Fail'];

  statusSelected = "";

  displayedColumns = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {

    let allColumnNames = [];
    for(let column of this.qaTasksTestcasesTableColumnList){
      allColumnNames.push(column.columnName);
    }

    this.displayedColumns = allColumnNames;
    ELEMENT_DATA = this.qaTasksTestcasesTableDataList;          
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  }

  testCaseStatusChanged(elementIndex){
    console.log(this.qaTasksTestcasesTableDataList[elementIndex]);    

    if(this.qaTasksTestcasesTableDataList[elementIndex]['Status'] == 'Pass'){
      this.qaTasksTestcasesTableDataList[elementIndex]['Status'] = 'Fail';
      ELEMENT_DATA = this.qaTasksTestcasesTableDataList;          
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    else if(this.qaTasksTestcasesTableDataList[elementIndex]['Status'] == 'Fail'){
      this.qaTasksTestcasesTableDataList[elementIndex]['Status'] = 'Pass';
      ELEMENT_DATA = this.qaTasksTestcasesTableDataList;          
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
  }

}
