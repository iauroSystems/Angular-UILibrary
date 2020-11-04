import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-iro-component-lib',
  template: `
    <p *ngIf="val">
      Test component
    </p>
  `,
  styles: [
  ]
})
export class IroComponentLibComponent implements OnInit {
  val = true;
  constructor() { }

  ngOnInit(): void {
  }

}
