import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbh-home',
  template: `
    <p>
      {{9.97 | vat}}
      {{11.16| vat}}
    {{4.95| vat}}
    </p>
  `,
  styles: [],
  providers:[]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
