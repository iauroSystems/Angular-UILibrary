import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iro-input',
  templateUrl: './iro-input.component.html',
  styleUrls: ['./iro-input.component.scss']
})
export class IroInputComponent implements OnInit {
  @Input() placeholder: string ='';
  @Input() label: string='';
  @Input() appearance: string = 'standard';
  @Input() hint: string='';
  @Input() value:any;

  @Output() inputVal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  inputChanged(val){
    this.inputVal.emit(val); 
  }
}
