import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iro-mat-checkboxes',
  templateUrl: './iro-mat-checkboxes.component.html',
  styleUrls: ['./iro-mat-checkboxes.component.css']
})
export class IroMatCheckboxesComponent implements OnInit {

  @Input() checkboxCountries: string;
  @Input() disabledCheckboxNo: string;
  checkedCountries = [];
  @Output() checkboxesCountrySelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToCheckedList(checked, country){
    if(checked == true){
      this.checkedCountries.push(country);
      this.checkboxesCountrySelected.emit(this.checkedCountries);
    }
    else if(checked == false){
      this.checkedCountries.splice(this.checkedCountries.indexOf(country), 1);
      this.checkboxesCountrySelected.emit(this.checkedCountries);
    }
  }

}
