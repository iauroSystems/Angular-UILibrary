import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iro-button',
  templateUrl: './iro-button.component.html',
  styleUrls: ['./iro-button.component.scss']
})
export class IroButtonComponent implements OnInit {
  @Input() title: string;
  @Input() color: string;
  @Input() disabled = false;
  @Input() rounded = false;
  @Input() raised = false;
  @Input() stroked = false;
  @Input() flat = false;
  @Input() buttonBackgroundColor: string;
  @Input() titleColor: string;
  
  @Input() borderRadius : string;
  @Input() buttonBorder : string;

 
  constructor() { }
  ngOnInit(): void {
    // console.log( "border"+ this.borderRadius);
    // console.log( "titleColor"+ this.titleColor);    
    
  }
}
