import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iro-mat-expansion-panel',
  templateUrl: './iro-mat-expansion-panel.component.html',
  styleUrls: ['./iro-mat-expansion-panel.component.css']
})
export class IroMatExpansionPanelComponent implements OnInit {

  @Input() expansionList;

  constructor() { }

  ngOnInit(): void {
  }

}
