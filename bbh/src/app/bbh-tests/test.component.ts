import {
  AfterContentInit,
  Component,
  ContentChildren, ElementRef,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';
import { TestChildComponent } from './test-child/test-child.component';

@Component({
  selector: 'bbh-test',
  template: `
    <div class="card" style="width: 20rem;">
      <div class="card-header">
        <ng-content select="h1"></ng-content>
      </div>
      <div class="card-body">
        <ng-content select=".par"></ng-content>
        <p class="card-text">text</p>
        <a href="#" class="btn btn-primary">button</a>
      </div>
    </div>
    <bbh-test-child></bbh-test-child>
  `,
  styles: []
})
export class TestComponent implements OnInit, AfterContentInit {

  @ContentChildren(TestChildComponent) child: QueryList<TestChildComponent>;
  @ViewChild(TestChildComponent, {read: ElementRef}) viewChild: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout( () => {
    })
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
