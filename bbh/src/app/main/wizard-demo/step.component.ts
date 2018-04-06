import { Component, EventEmitter, forwardRef, OnInit } from '@angular/core';
import { BaseStep } from '../../shared/wizard/base-step';
import { Step1Component } from './step1.component';

@Component({
  selector: 'bbh-step',
  template: `
    <p>
      {{generatedText}}
    </p>
    <button (click)="next()">Send</button>
  `,
  styles: [],
  providers: [{provide: BaseStep, useExisting: forwardRef(() => StepComponent)}]
})
export class StepComponent implements OnInit, BaseStep {

  sendNext = new EventEmitter<any>();
  generatedText: string;
  constructor() { }

  ngOnInit() {
  }

  generateText() {
    this.generatedText = 'step 2 text'
  }
  next() {
    this.sendNext.emit('from step')
  }

}
