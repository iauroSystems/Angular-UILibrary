import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

var ELEMENT_DATA = [];

@Component({
  selector: 'view-notes-group-attachment-table',
  templateUrl: './view-notes-group-attachment-table.component.html',
  styleUrls: ['./view-notes-group-attachment-table.component.scss']
})
export class ViewNotesGroupAttachmentTableComponent implements OnInit, OnChanges {

  @Input() viewNotesGroupsAttachmentTableDataList;
  @Input() viewNotesGroupsAttachmentTableColumnList;
  @Output() viewNotesGroupsAttachmentTableAttachDownloadSelected = new EventEmitter();

  displayedColumns = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {

    console.log(this.viewNotesGroupsAttachmentTableColumnList);
    console.log(this.viewNotesGroupsAttachmentTableDataList);    

    let allColumnNames = [];
    for(let column of this.viewNotesGroupsAttachmentTableColumnList){
      allColumnNames.push(column.columnName);
    }

    this.displayedColumns = allColumnNames;
    ELEMENT_DATA = this.viewNotesGroupsAttachmentTableDataList;          
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  }

  showAttachementDownloadFile(attachDownload, elementIndex){        
    if(attachDownload == 'showAttachement'){
      let attachDownloadSelectedElement = {'attachOrDownload':attachDownload, 'rowOfattachOrDownloadSelectedButton':this.viewNotesGroupsAttachmentTableDataList[elementIndex] };
      this.viewNotesGroupsAttachmentTableAttachDownloadSelected.emit(attachDownloadSelectedElement); 
    }
    else if(attachDownload == 'download'){
      let attachDownloadSelectedElement = {'attachOrDownload':attachDownload, 'rowOfattachOrDownloadSelectedButton':this.viewNotesGroupsAttachmentTableDataList[elementIndex] };
      this.viewNotesGroupsAttachmentTableAttachDownloadSelected.emit(attachDownloadSelectedElement); 
    }
  }

}
