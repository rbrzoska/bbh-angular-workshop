import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductsActionTypes } from './products.actions';
import { map, switchMap } from 'rxjs/operators';
import { ProductsService } from '../products/products.service';


@Injectable()
export class ProductsEffects {

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProducts),
    switchMap(() => this.productService.getAllProducts()),
    map(products => {
      return {
        type: ProductsActionTypes.LoadProductsSuccess,
        payload: products
      }
    })
  );

  constructor(private actions$: Actions, private productService: ProductsService) {}
}
