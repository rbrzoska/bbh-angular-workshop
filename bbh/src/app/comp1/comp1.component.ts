import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bbh-comp1',
  template: `
    <bbh-comp2 [data]="data"></bbh-comp2>
    Comp1: {{data | json}}
  `,
  styles: []
})
export class Comp1Component implements OnInit {


  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
