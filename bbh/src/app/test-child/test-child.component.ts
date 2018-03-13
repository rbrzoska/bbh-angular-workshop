import { Component, Inject, OnInit } from '@angular/core';


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

  ngOnInit() {
  }

  incr() {
    this.counter++;
  }

}
