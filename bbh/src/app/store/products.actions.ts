import { Action } from '@ngrx/store';
import { Product } from '../products/Product';

export enum ProductsActionTypes {
  ProductsAction = '[Products] Action',
  AddProduct = '[Products] Add',
  LoadProducts = '[Products] Load',
  LoadProductsSuccess = '[Products] Load Success'
}

export class Products implements Action {
  readonly type = ProductsActionTypes.ProductsAction;
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LoadProducts;
}

export class AddProduct implements Action {
  readonly type = ProductsActionTypes.AddProduct;
  constructor(public payload: Product){}
}
export class LoadProductsSucces implements Action {
  readonly type = ProductsActionTypes.LoadProductsSuccess;
  constructor(public payload: Product[]){}
}

export type ProductsActions = Products | AddProduct | LoadProducts | LoadProductsSucces;
