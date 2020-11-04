import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iro-mat-datepicker',
  templateUrl: './iro-mat-datepicker.component.html',
  styleUrls: ['./iro-mat-datepicker.component.css']
})
export class IroMatDatepickerComponent implements OnInit {

  @Input() datePickerLabel: string;
  @Input() datePickerType: string;
  @Output() dateSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDateChange(event){
    this.dateSelected.emit(event.getDate().toString() + "-" +
                          (event.getMonth() + 1).toString() + "-" + 
                          event.getFullYear().toString() ); 
  }

  monthFilterSelected(monthEvent){
    this.dateSelected.emit((monthEvent.getMonth()+1).toString() + " " + monthEvent.getFullYear().toString()); 
  }

}
