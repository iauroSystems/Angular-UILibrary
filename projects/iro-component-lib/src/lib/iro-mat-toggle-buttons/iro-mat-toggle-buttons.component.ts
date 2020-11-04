import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iro-mat-toggle-buttons',
  templateUrl: './iro-mat-toggle-buttons.component.html',
  styleUrls: ['./iro-mat-toggle-buttons.component.css']
})
export class IroMatToggleButtonsComponent implements OnInit {

  @Input() toggleCountries: string;
  @Input() selectedToggleButton: string;
  @Input() toggleType: string;
  selectedSection:string;
  @Output() selectedToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleValChange(value: string) {
    this.selectedSection = value;
    this.selectedToggle.emit(value);  
  }

}
