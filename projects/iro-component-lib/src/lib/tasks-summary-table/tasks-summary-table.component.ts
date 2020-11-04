import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

var ELEMENT_DATA = [];

@Component({
  selector: 'tasks-summary-table',
  templateUrl: './tasks-summary-table.component.html',
  styleUrls: ['./tasks-summary-table.component.scss']
})
export class TasksSummaryTableComponent implements OnInit, OnChanges {

  @Input() dataList;
  @Input() columnList;
  @Output() taskSummaryTableActionButtonSelected = new EventEmitter();
  @Output() rowSelectedEvent = new EventEmitter();

  displayedColumns = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {
    console.log(this.columnList);
    console.log(this.dataList);    

    let allColumnNames = [];
    for(let column of this.columnList){
      allColumnNames.push(column.columnName);
    }

    this.displayedColumns = allColumnNames;

    ELEMENT_DATA = this.dataList;          
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  }

  actionButtonEvent(action, elementIndex){
    let actionSelectedElement = {'action':action, 'rowOfActionSelectedButton':this.dataList[elementIndex] };
    this.taskSummaryTableActionButtonSelected.emit(actionSelectedElement); 
  }

  taskSummaryRowSelected(row, elementIndex, imageType){
    if(imageType != 'normal'){
      let rowSelectedElement = {'row':row, 'rowOfActionSelectedButton':this.dataList[elementIndex] };
      this.rowSelectedEvent.emit(rowSelectedElement); 
    }
  }

}
