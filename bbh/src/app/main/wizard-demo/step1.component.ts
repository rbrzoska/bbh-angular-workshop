import { Component, ContentChildren, EventEmitter, forwardRef, OnInit } from '@angular/core';
import { BaseStep } from '../../shared/wizard/base-step';

@Component({
  selector: 'bbh-step1',
  template: `
    <p>
      {{generatedText}}
    </p>
    <button (click)="next()">Send</button>
  `,
  styles: [],
  providers: [{provide: BaseStep, useExisting: forwardRef(() => Step1Component)}]
})
export class Step1Component implements OnInit, BaseStep {


  sendNext = new EventEmitter<any>();

  generatedText: string;
  constructor() { }

  ngOnInit() {
  }

  generateText() {
    this.generatedText = 'step 1 text'
  }

  next() {
    this.sendNext.emit('from step1')
  }


}
