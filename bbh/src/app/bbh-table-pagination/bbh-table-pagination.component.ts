import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bbh-table-pagination',
  templateUrl: './bbh-table-pagination.component.html',
  styles: []
})
export class BbhTablePaginationComponent implements OnInit {

  @Input() pages: number;
  @Output() onSelectPage = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  selectPage(page: number) {
    this.onSelectPage.emit(page);
  }

}
