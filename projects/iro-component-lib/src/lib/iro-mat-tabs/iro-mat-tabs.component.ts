import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iro-mat-tabs',
  templateUrl: './iro-mat-tabs.component.html',
  styleUrls: ['./iro-mat-tabs.component.css']
})
export class IroMatTabsComponent implements OnInit {

  @Input() tabs : string;

  constructor() { }

  ngOnInit(): void {
  }

}
