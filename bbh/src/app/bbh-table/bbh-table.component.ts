import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-bbh-table',
  templateUrl: './bbh-table.component.html',
  styles: []
})
export class BbhTableComponent implements OnInit {

  @Input() products: Product[];
  constructor() { }

  ngOnInit() {
  }

}
