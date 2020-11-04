import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

var ELEMENT_DATA = [];

@Component({
  selector: 'qa-task-defects-table',
  templateUrl: './qa-task-defects-table.component.html',
  styleUrls: ['./qa-task-defects-table.component.scss']
})
export class QaTaskDefectsTableComponent implements OnInit, OnChanges {

  @Input() qaTasksDefectsTableDataList;
  @Input() qaTasksDefectsTableColumnList;
  @Output() qaTasksDefectsTableEyeAttachButtonSelected = new EventEmitter();

  displayedColumns = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {

    console.log(this.qaTasksDefectsTableColumnList);
    console.log(this.qaTasksDefectsTableDataList);    

    let allColumnNames = [];
    for(let column of this.qaTasksDefectsTableColumnList){
      allColumnNames.push(column.columnName);
    }

    this.displayedColumns = allColumnNames;
    ELEMENT_DATA = this.qaTasksDefectsTableDataList;          
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  }


  eyeAttachClicked(eyeAttach, elementIndex){
    if(eyeAttach == 'eye'){
      let eyeAttachSelectedElement = {'eyeOrAttach':eyeAttach, 'rowOfEyeOrAttachSelectedButton':this.qaTasksDefectsTableDataList[elementIndex] };
      this.qaTasksDefectsTableEyeAttachButtonSelected.emit(eyeAttachSelectedElement); 
    }
    else if(eyeAttach == 'attach'){
      let eyeAttachSelectedElement = {'eyeOrAttach':eyeAttach, 'rowOfEyeOrAttachSelectedButton':this.qaTasksDefectsTableDataList[elementIndex] };
      this.qaTasksDefectsTableEyeAttachButtonSelected.emit(eyeAttachSelectedElement); 
    }
  }

}
