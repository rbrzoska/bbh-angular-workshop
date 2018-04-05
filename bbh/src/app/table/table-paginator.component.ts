import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bbh-table-paginator',
  template: `
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li *bbhRepeat="let index in pages;let index2 = index2" class="page-item">
          <a class="page-link" (click)="onChangePage.emit(index)">{{index}}</a>
        </li>        
      </ul>
    </nav>
  `,
  styles: []
})
export class TablePaginatorComponent implements OnInit {


  @Input() pages: number;
  @Output() onChangePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
