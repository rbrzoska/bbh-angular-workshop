import { Directive, ElementRef, HostListener } from '@angular/core';
import { CustomRendererService } from './custom-renderer.service';
import { BbhTableComponent } from './bbh-table/bbh-table.component';

@Directive({
  selector: '[appTableRowSelect]'
})
export class TableRowSelectDirective {

  constructor(private elemRef: ElementRef, private customRenderer: CustomRendererService, private table: BbhTableComponent) { }

  @HostListener('focus',['$event'])
  onFocus(ev) {
  }

}
