import { Component, ContentChild, Directive, Input, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appBbhCustomColumn]'
})
export class BbhCustomColumnDirective {}

@Component({
  selector: 'app-bbh-table-column',
  templateUrl: './bbh-table-column.component.html',
  styles: []
})
export class BbhTableColumnComponent {

  @Input() type = 'default';
  @Input() title: string;
  @Input() property: string;

  @ContentChild(BbhCustomColumnDirective, {read: TemplateRef}) customColumnTemplate;

}
