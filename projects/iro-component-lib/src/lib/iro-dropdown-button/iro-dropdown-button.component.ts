import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iro-dropdown-button',
  templateUrl: './iro-dropdown-button.component.html',
  styleUrls: ['./iro-dropdown-button.component.scss']
})
export class IroDropdownButtonComponent implements OnInit {

  @Output() dropdownSelected = new EventEmitter();

  @Input() optionTextColor: string;
  @Input() selectedDropdown: string;
  @Input() dropdownList: string;
  @Input() placeHolder: string;
  @Input() height: string;
  @Input() width: string;
  @Input() disabled = false;
  @Input() isBorder: string;
  @Input() backgroundColor: string;
  @Input() disabledOption: string;
  @Input() label: string;

  dropdownSelectedFun(selected){
    this.dropdownSelected.emit(selected);
  }  

  constructor() { }

  ngOnInit(): void {
    console.log(this.dropdownList);
    
  }

}
