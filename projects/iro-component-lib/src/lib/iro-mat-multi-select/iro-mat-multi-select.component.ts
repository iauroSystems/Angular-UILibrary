import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iro-mat-multi-select',
  templateUrl: './iro-mat-multi-select.component.html',
  styleUrls: ['./iro-mat-multi-select.component.css']
})
export class IroMatMultiSelectComponent implements OnInit {

  @Input() multiSelectList;
  multiSelectedValue: any[];
  @Output() multiSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  multiSelect(event){
    this.multiSelected.emit(this.multiSelectedValue);
  }

}
