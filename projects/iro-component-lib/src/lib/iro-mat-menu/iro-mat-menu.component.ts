import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iro-mat-menu',
  templateUrl: './iro-mat-menu.component.html',
  styleUrls: ['./iro-mat-menu.component.css']
})
export class IroMatMenuComponent implements OnInit {

  @Input() menuCountries: string;
  @Input() menuTitle: string;
  @Output() menuCountrySelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  menuCountryChange(event){
    this.menuCountrySelected.emit(event); 
  }

}
