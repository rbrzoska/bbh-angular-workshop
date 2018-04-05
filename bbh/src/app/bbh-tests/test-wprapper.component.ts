import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbh-test-wprapper',
  template: `
    <bbh-test>
      <h1>Header title</h1>
      <p class="par">Paragraph</p>
      <p class="par">Paragraph</p>
      <p class="par">Paragraph</p>
    </bbh-test>
    <bbh-comp1 [data]="data"></bbh-comp1>
  `,
  styles: []
})
export class TestWprapperComponent implements OnInit {

  data = {
    prop1: 1,
    prop2: 2
  };

  ngOnInit() {
    setInterval(() => {
      this.data.prop1++;
    }, 5000)
  }
  constructor() { }


}
