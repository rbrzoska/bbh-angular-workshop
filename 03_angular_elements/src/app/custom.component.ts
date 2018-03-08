import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-component',
  template: `
      <h3>Hello {{name}}</h3>
    <p>
      my-component works!
    </p>
      <button (click)="check.emit(name)">Check name</button>
  `,
  styles: []
})
export class CustomComponent implements OnInit {

  @Input() name = '';
  @Output() check = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
