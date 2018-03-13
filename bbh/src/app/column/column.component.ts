import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bbh-column',
  template: `
    <p>
      column works!
    </p>
  `,
  styles: []
})
export class ColumnComponent implements OnInit {

  @Input() title: string;
  @Input() property: string;
  constructor() { }

  ngOnInit() {
  }

}
