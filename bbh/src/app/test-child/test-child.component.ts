import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbh-test-child',
  template: `
    <p>
      {{counter}}
    </p>
  `,
  styles: []
})
export class TestChildComponent implements OnInit {

  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  incr() {
    this.counter++;
  }

}
