import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iro-text-color-font-size',
  templateUrl: './iro-text-color-font-size.component.html',
  styleUrls: ['./iro-text-color-font-size.component.scss']
})
export class IroTextColorFontSizeComponent implements OnInit {

  @Input() color: string;
  @Input() fontSize: string;
  @Input() text: string;

  constructor() {
    console.log(this.color);
    
   }

  ngOnInit(): void {
    console.log(this.color);

  }

}
