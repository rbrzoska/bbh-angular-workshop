import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { TestChildComponent } from '../test-child/test-child.component';

@Component({
  selector: 'bbh-test',
  template: `
    <ng-content></ng-content>
    <button (click)="incrAll()">Increment</button>
  `,
  styles: []
})
export class TestComponent implements OnInit, AfterContentInit {

  @ContentChildren(TestChildComponent) child: QueryList<TestChildComponent>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    setTimeout( () => {
      this.incrAll();
    console.log(this.child)
  });
  }

  incrAll() {
    this.child.forEach(c => c.incr());
  }

}
