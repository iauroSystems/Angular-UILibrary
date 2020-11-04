import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iro-card',
  templateUrl: './iro-card.component.html',
  styleUrls: ['./iro-card.component.css']
})
export class IroCardComponent implements OnInit {

  @Input() cardHeight: string;
  @Input() cardWidth: string;
  @Input() cardBackgroundColor: string;
  @Input() cardBorderRadius: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.cardHeight);
    console.log(this.cardWidth);
    
  }


}
