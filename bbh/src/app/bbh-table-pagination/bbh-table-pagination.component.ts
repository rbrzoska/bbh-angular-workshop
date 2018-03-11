import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bbh-table-pagination',
  templateUrl: './bbh-table-pagination.component.html',
  styles: []
})
export class BbhTablePaginationComponent implements OnInit {

  totalPages: number;

  @Input()
  set totalItems(num: number){
    this.totalPages = num % 5 + 1;
  };

  @Output() onSelectPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectPage(page: number) {
    this.onSelectPage.emit(page);
  }

}
