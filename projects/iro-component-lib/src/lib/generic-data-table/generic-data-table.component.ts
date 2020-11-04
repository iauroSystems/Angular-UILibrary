import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

var ELEMENT_DATA = [];

@Component({
  selector: 'generic-data-table',
  templateUrl: './generic-data-table.component.html',
  styleUrls: ['./generic-data-table.component.scss']
})
export class GenericDataTableComponent implements OnInit, OnChanges {

  @Input() genericTableDataList;
  @Input() genericTableColumnList;
  @Input() grandTotal;
  @Input() grandTotalColumn;
  @Input() manageColumns;
  // @Input() pagination;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @Output() genericRowSelectedEvent = new EventEmitter();

  columnSelectionFeatureData = [];
  temporaryColumnSelectionFeatureData = [];
  allowedFeatureColumns = true;
  actualColumnsFeature: string[] = [];


  displayedColumns = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {

    this.columnSelectionFeatureData = [];

    let allColumnNames = [];
    for(let column of this.genericTableColumnList){
      allColumnNames.push(column.columnName);

      let obj = {};
      obj["key"] = column.columnName;
      obj["value"] = column.columnName;
      obj["selected"] = true;
      this.columnSelectionFeatureData.push(obj);
    }

    this.displayedColumns = allColumnNames;
    this.actualColumnsFeature = this.displayedColumns

    ELEMENT_DATA = this.genericTableDataList;          
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;

    // if(this.pagination == 'true'){
    //   this.dataSource.paginator = this.paginator;
    // }

  }

  manageColumnsMenuOpen() {
    console.log("Menu opened");
    console.log(JSON.parse(JSON.stringify(this.columnSelectionFeatureData)));    
    this.temporaryColumnSelectionFeatureData = [];
    this.temporaryColumnSelectionFeatureData = JSON.parse(JSON.stringify(this.columnSelectionFeatureData));
  }
  checkColumns() {
    let count = 0;
    this.temporaryColumnSelectionFeatureData.forEach(element => {
      if (element.selected)
        count++;
    })
    this.allowedFeatureColumns = (count >= 1) ? true : false;
  }
  applyColumnFilter() {
    console.log(JSON.parse(JSON.stringify(this.temporaryColumnSelectionFeatureData)));    
    this.columnSelectionFeatureData = [];
    this.columnSelectionFeatureData = JSON.parse(JSON.stringify(this.temporaryColumnSelectionFeatureData));
    this.actualColumnsFeature = [];
    this.actualColumnsFeature = this.columnSelectionFeatureData.filter((column) => column.selected == true).map((col) => col.key);
  }
  genericTableRowSelected(elementIndex){
    let rowSelectedElement = {'rowOfGenericTable':this.genericTableDataList[elementIndex] };
    this.genericRowSelectedEvent.emit(rowSelectedElement); 
  }

  calculateGrandTotal1(columnName){   
    let total = 0;
    for(let column of this.genericTableDataList){
      total = total + parseInt(column[columnName]);
    }
    return total.toString();
  }

}
