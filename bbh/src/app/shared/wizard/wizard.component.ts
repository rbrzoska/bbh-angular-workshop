import { AfterContentInit, Component, ContentChildren, Directive, OnInit, QueryList } from '@angular/core';
import { BaseStep } from './base-step';

@Component({
  selector: 'bbh-wizard',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class WizardComponent implements OnInit, AfterContentInit {

  @ContentChildren('wizardStep') templateSteps: QueryList<BaseStep>;
  @ContentChildren(BaseStep) baseSteps: QueryList<BaseStep>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.baseSteps.toArray().forEach(x => {
      x.generateText();
      x.sendNext.subscribe(x => {
        console.log(x)
        alert(x)
      })
    })


  }

}
