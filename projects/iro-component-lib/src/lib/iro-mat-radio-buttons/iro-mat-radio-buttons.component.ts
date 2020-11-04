import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iro-mat-radio-buttons',
  templateUrl: './iro-mat-radio-buttons.component.html',
  styleUrls: ['./iro-mat-radio-buttons.component.css']
})
export class IroMatRadioButtonsComponent implements OnInit {

  @Input() countries: string;
  @Input() isColumn: string;
  @Output() countrySelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRadioChange(event){
    this.countrySelected.emit(event.value); 
  }

}
