import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

var ELEMENT_DATA = [];

@Component({
  selector: 'iro-mat-table',
  templateUrl: './iro-mat-table.component.html',
  styleUrls: ['./iro-mat-table.component.scss']
})
export class IroMatTableComponent implements OnInit, OnChanges {

  @Input() dataList;
  @Input() columnList;

  displayedColumns = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {
    console.log(this.columnList);
    console.log(this.dataList);    

    this.displayedColumns = this.columnList;
    ELEMENT_DATA = this.dataList;          
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

}
