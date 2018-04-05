import { Component, ContentChild,
  Directive, Input, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector:'[customColumn]'
})
export class CustomColumnDirective {
}

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

  @ContentChild(CustomColumnDirective, {read: TemplateRef}) customTemplate: TemplateRef<any>;
  @Input() title: string;
  @Input() property: string;
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
