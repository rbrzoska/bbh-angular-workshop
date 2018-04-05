import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bbh-comp2',
  template: `
    <bbh-comp3 *ngFor="let i of getData2()" [data]="data"></bbh-comp3>
    Comp2: {{data | json}}
    <button (click)="refresh()">Refresh</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp2Component implements OnInit {

  data2 = [1,2,3]
  @Input() data: any;
  constructor(private cdr: ChangeDetectorRef) { }

  getData2() {
    return [1,2,3]
  }
  ngOnInit() {
    this.cdr.detach();

  }

  refresh() {
    this.cdr.detectChanges()
  }


}
