import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

var ELEMENT_DATA = [];

@Component({
  selector: 'release-management-table',
  templateUrl: './release-management-table.component.html',
  styleUrls: ['./release-management-table.component.scss']
})
export class ReleaseManagementTableComponent implements OnInit, OnChanges {

  @Input() releaseManagementTableDataList;
  @Input() releaseManagementTableColumnList;
  @Output() releaseManagementTableButtonSelected = new EventEmitter();

  displayedColumns = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {

    let allColumnNames = [];
    for(let column of this.releaseManagementTableColumnList){
      allColumnNames.push(column.columnName);
    }

    this.displayedColumns = allColumnNames;

    ELEMENT_DATA = this.releaseManagementTableDataList;          
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  }

  buttonClick(buttonName, elementIndex){
    console.log(buttonName);
    console.log(this.releaseManagementTableDataList[elementIndex]);   
    let buttonNameSelectedElement = {'buttonName':buttonName, 'rowOfSelectedButton':this.releaseManagementTableDataList[elementIndex] };
    this.releaseManagementTableButtonSelected.emit(buttonNameSelectedElement); 
  }

}
