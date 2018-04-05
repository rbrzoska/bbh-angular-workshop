import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bbh-comp3',
  template: `
    <p>
      Comp3: {{data | json}}
      Counter {{counter}}
    </p>
    <button (click)="incr()">Click comp3</button>
  `,
  styles: []
})
export class Comp3Component{

  counter = 0;

  @Input() data: any;
  constructor() { }

  incr() {
    this.counter++;
  }

}
