import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbh-wizard-demo',
  template: `
    <div class="card">
      <bbh-wizard>
        <bbh-step></bbh-step>
        <bbh-step1></bbh-step1>
      </bbh-wizard>
    </div>
  `,
  styles: []
})
export class WizardDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
