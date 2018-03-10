import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styles: []
})
export class TableDemoComponent implements OnInit {

  products: Product[] = [];
  total: number;
  pagesNumber = 0;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.refreshData(1);
  }

  onSelectPage(page) {
    this.refreshData(page);
  }

  refreshData(page: number) {
    this.productsService.getProducts(page).subscribe(p => {
      this.products = p.body;
      this.total = parseInt(p.headers.get('X-Total-Count'));
      this.pagesNumber = this.total % 5 + 1;
    });
  }
}
